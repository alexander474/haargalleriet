import { Component, Input } from '@angular/core';
import { Employee } from '../../models/Employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
}
