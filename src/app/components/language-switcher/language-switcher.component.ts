import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private translate: TranslateService) {}

  ngOnInit() {
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
    localStorage.setItem('language', langCode);
  }

  get currentFlag(): string {
    return (
      this.languages.find((l) => l.code === this.currentLang)?.flag || '🇳🇴'
    );
  }
}
