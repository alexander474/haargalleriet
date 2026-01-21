import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TeamSectionComponent } from '../../components/team-section/team-section.component';
import { Employee, EMPLOYEES } from '../../models/Employee.model';
import { companyInfo } from '../../models/CompanyInfo.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, TeamSectionComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  employees: Employee[] = [];
  companyInfo = companyInfo;

  ngOnInit(): void {
    this.employees = EMPLOYEES;
  }
}
