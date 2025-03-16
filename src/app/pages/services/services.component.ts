import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBoxComponent } from '../../components/service-box/service-box.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceBoxComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    'Klipp av Barn/Dame/Herre',
    'Farging av vipper/bryn',
    'Permanent',
    'Brudepynt',
    'Farging og striper',
    'Vippeextension',
    'Hull i øre',
    'Kur med eller uten massage'
  ];
}
