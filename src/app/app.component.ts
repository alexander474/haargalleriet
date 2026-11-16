import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const SITE_URL = 'https://www.haargallerietfagernes.no';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe((e) => this.updateCanonicalUrl(e.urlAfterRedirects));
  }

  /** Point canonical and og:url at the current page instead of the homepage. */
  private updateCanonicalUrl(url: string): void {
    const path = url.split(/[?#]/)[0];
    const pageUrl = SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));

    let link = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', pageUrl);
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
  }
}
