import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsComponent } from './country-details.component';
import  { reducer } from '../state/countries/countries.reducer';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from '../state/countries/countries.effect';


@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('countries', reducer),
    EffectsModule.forFeature([CountriesEffects]),
  ],
  exports: [CountryDetailsComponent]
})
export class CountryDetailsModule { }
