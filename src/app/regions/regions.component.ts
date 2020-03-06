import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Observable, EMPTY } from 'rxjs';
import { Country } from './country';
import { catchError } from 'rxjs/operators';
import * as fromRegions from '../state';
import * as regionsActions from '../state/regions/regions.action';
import * as countryActions from '../state/countries/countries.action';

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
  regions$:Observable<any>;
  countries$: Observable<any>;
  constructor(private service: CountriesService,
              private store: Store<fromRegions.State>,
    ) { }
  ngOnInit() {
    this.store.dispatch(new regionsActions.Load());
    this.regions$ = this.store.pipe(select(fromRegions.getRegions)).pipe(
      catchError(err => {
        this.errorMessage = err;
        return  EMPTY;
      })
    );
  }
  public onSelected(region) {
    this.store.dispatch(new countryActions.GetCountries(region));
    this.countries$ = this.store.pipe(select(fromRegions.getCountries));
  }
  public onSelectedCountry(country) {
   this.countries$.subscribe(
     res =>
       this.countryDetails = res.find(c => c.name === country)
   );
  }
}
