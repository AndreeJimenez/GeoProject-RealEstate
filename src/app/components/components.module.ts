import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { MapsViewComponent } from './maps-view/maps-view.component';
import { TemplateComponent } from './template/template.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MapContainerComponent } from './map-container/map-container.component';
import { CardPropertyComponent } from './card-property/card-property.component'

// Leaflet Map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    SidebarComponent,
    ModalComponent,
    HeaderComponent,
    LoginComponent,
    PropertiesListComponent,
    MapsViewComponent,
    TemplateComponent,
    MapContainerComponent,
    CardPropertyComponent
  ],
  exports: [
    SidebarComponent,
    ModalComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsRoutingModule,
    LeafletModule
  ]
})
export class ComponentsModule { }