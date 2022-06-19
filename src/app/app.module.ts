import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { Routing } from "./app-routing.module";
import { MainLayoutModule } from "./main-layout/main-layout.module";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    Routing,
    MainLayoutModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
