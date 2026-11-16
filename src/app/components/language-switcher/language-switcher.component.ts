import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent implements OnInit {
  currentLang = 'no';

  languages = [
    { code: 'no', name: 'Norsk', flag: '🇳🇴' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Prerendered HTML is always Norwegian; language detection runs in the browser.
    if (!this.isBrowser) {
      this.translate.use('no');
      return;
    }

    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && ['no', 'en'].includes(savedLang)) {
      this.currentLang = savedLang;
      this.translate.use(savedLang);
    } else {
      // Detect browser language
      const browserLang = this.translate.getBrowserLang();
      this.currentLang = browserLang === 'en' ? 'en' : 'no';
      this.translate.use(this.currentLang);
    }
  }

  switchLanguage(langCode: string) {
    this.currentLang = langCode;
    this.translate.use(langCode);
    if (this.isBrowser) {
      localStorage.setItem('language', langCode);
    }
  }

  get currentFlag(): string {
    return (
      this.languages.find((l) => l.code === this.currentLang)?.flag || '🇳🇴'
    );
  }
}
