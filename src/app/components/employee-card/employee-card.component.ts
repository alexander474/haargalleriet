import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
}
