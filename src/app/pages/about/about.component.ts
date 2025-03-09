// about.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <p-card header="Om Oss">
      <p>Her kommer info om oss...</p>
    </p-card>
  `
})
export class AboutComponent {}
