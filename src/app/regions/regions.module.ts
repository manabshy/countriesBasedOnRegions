import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsModule}  from '../country-details/country-details.module';
import { RegionsComponent} from './regions.component';


@NgModule({
  imports: [
    CommonModule,
    CountryDetailsModule
  ],
  declarations: [RegionsComponent],
  exports: [RegionsComponent]
})
export class RegionsModule { }
