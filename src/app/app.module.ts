import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionsModule } from './regions/regions.module';
import { CountryDetailsModule } from './country-details/country-details.module';
import { HttpClientModule } from '@angular/common/http';
/*NgRx*/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
/*NgRx Devtools*/
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RegionsComponent } from './regions/regions.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegionsModule,
    CountryDetailsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'SDC App DevTools',
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
