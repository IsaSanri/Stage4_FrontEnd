import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalComponent } from './personal.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalRoutingModule } from './personal-routing.module';


@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class PersonalModule { }
