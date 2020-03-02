import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Observable, EMPTY } from 'rxjs';
import { Country } from './country';
import { catchError } from 'rxjs/operators';
import * as fromRegions from '../state';
import * as regionsActions from '../state/regions/regions.action';

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  errorMessage = '';
  countries = [];
  countryDetails;
  regions;

  constructor(private service: CountriesService,
              private store: Store<fromRegions.State>,
    ) { }
  ngOnInit() {
    this.store.dispatch(new regionsActions.Load());
    this.store.pipe(select(fromRegions.getRegions)).subscribe(
      regions => {
        this.regions = regions;
      });
  }
  public onSelected(region) {
    this.service.getCountriesByRegion(region).subscribe(
      res => {
        this.countries = res;
      }
    );
  }
  public onSelectedCountry(country) {
   this.countryDetails = this.countries.find(c => c.name === country);
  }
}
