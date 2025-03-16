import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer', // du kan kalle den hva du vil
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // Eksempel på dynamisk data:
  currentVersion = '1.0.0';
  logoUrl = '/assets/images/haargalleriet_logo.png'; // Evt. en annen sti

  goToHomePage(): void {
    // Naviger til f.eks. haargalleriet.no
    window.open('https://haargalleriet.no/', '_blank');
  }
}
