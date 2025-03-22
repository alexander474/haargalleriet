import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Listbox } from 'primeng/listbox';
import { ServiceType } from '../../models/ServiceType.model';

@Component({
  selector: 'app-homepage',
  imports: [Divider, Card, Listbox],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  services = Object.values(ServiceType).map((service) => ({ label: service }));
}
