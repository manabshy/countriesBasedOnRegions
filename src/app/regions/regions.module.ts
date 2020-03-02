import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsModule}  from '../country-details/country-details.module';
import { RegionsComponent} from './regions.component';
import  { reducer } from '../state/regions/regions.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from '../state/regions/regions.effects';

@NgModule({
  imports: [
    CommonModule,
    CountryDetailsModule,
    StoreModule.forFeature('regions', reducer),
    EffectsModule.forFeature([RegionEffects]),
  ],
  declarations: [RegionsComponent],
  exports: [RegionsComponent]
})
export class RegionsModule { }
