import { Action } from '@ngrx/store';
import { Country } from '../../regions/country';

export enum CountryActionTypes {
  GetCountries = '[Get Countries] Get Countries',
  LoadSuccess = '[Load Countries] Load Success',
  LoadFail = '[Load Countries] Load Fail'
}

export class GetCountries implements Action {
  readonly type = CountryActionTypes.GetCountries;
  constructor(public region: string) {}

}

export class LoadSuccess implements Action {
  readonly type = CountryActionTypes.LoadSuccess;

  constructor(public payload: Country[]) {}
}

export class LoadFail implements Action {
  readonly type = CountryActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export type CountryActions =
| GetCountries
| LoadSuccess
| LoadFail;
