import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { Employee } from '../../models/Employee.model';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.scss'],
})
export class TeamSectionComponent {
  @Input() employees: Employee[] = [];
}
