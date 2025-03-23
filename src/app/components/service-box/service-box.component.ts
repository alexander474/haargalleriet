import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-service-box',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.scss'],
})
export class ServiceBoxComponent {
  @Input() name: string = '';
  @Input() description: string = '';
}
