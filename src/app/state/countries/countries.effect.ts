import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as countryActions from './countries.action';
import { CountriesService } from 'src/app/countries.service';

  @Injectable()
  export class CountriesEffects {

  @Effect()
  GetCountries$: Observable<Action> = this.actions$.pipe(
    ofType(countryActions.CountryActionTypes.GetCountries),
    map((action: countryActions.GetCountries) => action.region),

    switchMap(region_name =>
      this.countryService.getCountriesByRegion(region_name).pipe(
        tap(countries => console.log(JSON.stringify(countries))),
        map(countries => new countryActions.LoadSuccess(countries)),
        catchError(err => of(new countryActions.LoadFail(err))),
      ),
    ),
  );

  constructor(
    private countryService: CountriesService,
    private actions$: Actions,
  ) {}
  }
