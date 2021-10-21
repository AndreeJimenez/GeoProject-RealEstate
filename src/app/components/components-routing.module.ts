import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsViewComponent } from './maps-view/maps-view.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes =  [
  {path: 'tpl', component: TemplateComponent, children: [
    {path: 'maps', component: MapsViewComponent},
    {path: 'properties', component: PropertiesListComponent},
    {path: '**', redirectTo: 'maps'}
  ]},
  {path: '**', redirectTo: 'tpl'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class ComponentsRoutingModule {}