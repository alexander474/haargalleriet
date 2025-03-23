import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/Employee.model';

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
