import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplateComponent } from './home-template/home-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: 'bomberos',
        loadChildren: () => import('../components/components.module').then((m) => m.ComponentsModule),
      },
      {path: '**', redirectTo: 'bomberos'}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }