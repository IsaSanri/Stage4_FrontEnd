import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    MainLayoutComponent,
    ToolbarComponent,

  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    RouterModule,
    AngularMaterialModule
  ]
})
export class MainLayoutModule { }
