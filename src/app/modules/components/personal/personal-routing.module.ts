import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressComponent } from '../adress/adress.component';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path:"",
    component:PersonalComponent
  },
  {
    path:"adress",
    component:AdressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
