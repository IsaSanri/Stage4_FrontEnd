import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { Routing } from "./app-routing.module";
import { MainLayoutModule } from "./main-layout/main-layout.module";


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    Routing,
    MainLayoutModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
