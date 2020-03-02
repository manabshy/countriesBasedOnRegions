import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { RegionsService } from 'src/app/regions.service';
import * as regionActions from './regions.action';

  @Injectable()
  export class RegionEffects {

  @Effect()
  loadRegions$: Observable<Action> = this.actions$.pipe(
    ofType(regionActions.RegionActionTypes.Load),
    switchMap(action =>
      this.regionsService.regions$.pipe(
        tap(regions => console.log(JSON.stringify(regions))),
        map(regions => new regionActions.LoadSuccess(regions)),
        catchError(err => of(new regionActions.LoadFail(err))),
      ),
    ),
  );

  constructor(
    private regionsService: RegionsService,
    private actions$: Actions,
  ) {}
  }
