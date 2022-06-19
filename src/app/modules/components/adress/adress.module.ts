import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressRoutingModule } from './adress-routing.module';
import { AdressComponent } from './adress.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdressComponent
  ],
  imports: [
    CommonModule,
    AdressRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AdressModule { }
