import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBoxComponent } from '../../components/service-box/service-box.component';
import {
  ServiceDescriptions,
  ServiceType,
} from '../../models/ServiceType.model';

const ServiceIcons: Record<ServiceType, string> = {
  [ServiceType.Haircut]: 'pi-scissors',
  [ServiceType.BrowTint]: 'pi-eye',
  [ServiceType.Perm]: 'pi-sync',
  [ServiceType.Bridal]: 'pi-heart',
  [ServiceType.ColorAndHighlights]: 'pi-palette',
  [ServiceType.LashExtensions]: 'pi-sparkles',
  [ServiceType.EarPiercing]: 'pi-circle',
  [ServiceType.HairTreatment]: 'pi-star',
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceBoxComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = Object.values(ServiceType).map((label) => ({
    label,
    description: ServiceDescriptions[label as ServiceType],
    icon: ServiceIcons[label as ServiceType],
  }));
}
