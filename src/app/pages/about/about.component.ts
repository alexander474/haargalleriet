import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSectionComponent } from '../../components/team-section/team-section.component';
import { Employee, EMPLOYEES } from '../../models/Employee.model';
import { companyInfo } from '../../models/companyInfo.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TeamSectionComponent],
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
