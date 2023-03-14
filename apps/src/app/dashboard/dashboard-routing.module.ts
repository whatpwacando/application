import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnpcComponent } from './cnpc/cnpc.component';
import { DashboardComponent } from './dashboard.component';
import { SinopecComponent } from './sinopec/sinopec.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'cnpc',
        component: CnpcComponent,
      },
      {
        path: 'sinopec',
        component: SinopecComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
