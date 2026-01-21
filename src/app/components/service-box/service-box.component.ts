import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-box',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.scss'],
})
export class ServiceBoxComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() icon: string = 'pi-star';
}
