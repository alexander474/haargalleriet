import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.scss']
})
export class ServiceBoxComponent {
  @Input() service: string = '';
}
