import { IProperties } from 'src/app/interfaces/properties/properties.interface';
import { PropertiesService } from 'src/app/services/properties/properties.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-card-property',
  templateUrl: './card-property.component.html',
  styleUrls: ['./card-property.component.scss'],
})
export class CardPropertyComponent implements OnInit {
  properties: IProperties[] = [];
  propertiesObs: Subscription = this.propertiesService
    .getPropertiesFirebase()
    .pipe(takeWhile(() => this.isActive))
    .subscribe((properties: IProperties[]) => {
      this.properties = properties;
      console.log(properties);
    });
  isActive: boolean = true;

  constructor(
    private propertiesService: PropertiesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.properties = [];
    this.isActive = true;
    this.propertiesObs = this.propertiesService
      .getPropertiesFirebase()
      .pipe(takeWhile(() => this.isActive))
      .subscribe((properties: IProperties[]) => {
        this.properties = properties;
        console.log(properties);
      });
  }

  ngOnDestroy(): void {
    console.log('Lista de propiedades destruida');
  }
}
