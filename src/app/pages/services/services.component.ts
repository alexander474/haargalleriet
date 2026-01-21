import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceBoxComponent } from '../../components/service-box/service-box.component';

interface ServiceItem {
  nameKey: string;
  descKey: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceBoxComponent, TranslateModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      nameKey: 'SERVICES.TYPES.HAIRCUT.NAME',
      descKey: 'SERVICES.TYPES.HAIRCUT.DESC',
      icon: 'pi-scissors',
    },
    {
      nameKey: 'SERVICES.TYPES.BROW_TINT.NAME',
      descKey: 'SERVICES.TYPES.BROW_TINT.DESC',
      icon: 'pi-eye',
    },
    {
      nameKey: 'SERVICES.TYPES.PERM.NAME',
      descKey: 'SERVICES.TYPES.PERM.DESC',
      icon: 'pi-sync',
    },
    {
      nameKey: 'SERVICES.TYPES.BRIDAL.NAME',
      descKey: 'SERVICES.TYPES.BRIDAL.DESC',
      icon: 'pi-heart',
    },
    {
      nameKey: 'SERVICES.TYPES.COLOR.NAME',
      descKey: 'SERVICES.TYPES.COLOR.DESC',
      icon: 'pi-palette',
    },
    {
      nameKey: 'SERVICES.TYPES.LASH.NAME',
      descKey: 'SERVICES.TYPES.LASH.DESC',
      icon: 'pi-sparkles',
    },
    {
      nameKey: 'SERVICES.TYPES.EAR.NAME',
      descKey: 'SERVICES.TYPES.EAR.DESC',
      icon: 'pi-circle',
    },
    {
      nameKey: 'SERVICES.TYPES.TREATMENT.NAME',
      descKey: 'SERVICES.TYPES.TREATMENT.DESC',
      icon: 'pi-star',
    },
  ];
}
