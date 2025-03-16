import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSectionComponent } from '../../components/team-section/team-section.component';

interface Employee {
  name: string;
  image: string;
  // eventuelt: role, description, etc.
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TeamSectionComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  employees: Employee[] = [];

  ngOnInit(): void {
    // Eksempeldata – bytt ut med dine egne bilder og navn
    this.employees = [
      { name: 'Anita', image: 'assets/images/employees/employe_anita.jpg' },
      { name: 'Hilde', image: 'assets/images/employees/employe_hilde.jpg' },
      { name: 'Kine', image: 'assets/images/employees/employe_kine.jpg' },
      { name: 'Eline', image: 'assets/images/employees/employe_eline.jpg' },
      { name: 'Marit', image: 'assets/images/employees/employe_marit.jpg' },
      { name: 'Narine', image: 'assets/images/employees/employe_narine.jpg' }
    ];
  }
}
