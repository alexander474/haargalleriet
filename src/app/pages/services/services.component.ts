import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBoxComponent } from '../../components/service-box/service-box.component';
import { ServiceType } from '../../models/ServiceType.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceBoxComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = Object.values(ServiceType).map((service) => ({ label: service }));
}
