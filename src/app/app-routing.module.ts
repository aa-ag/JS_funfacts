import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapfunctionComponent } from './mapfunction/mapfunction.component';
import { BrendaneichComponent } from './brendaneich/brendaneich.component';


const routes: Routes = [
  {
    path: 'funfacts', component: FunfactsComponent
  },
  {
    path: 'promises', component: PromisesComponent
  },
  {
    path: 'callbacks', component: CallbacksComponent
  },
  {
    path: 'mapfunction', component: MapfunctionComponent
  },
  {
    path: 'brendaneich', component: BrendaneichComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
