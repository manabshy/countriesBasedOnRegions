import { Action } from '@ngrx/store';
import { Region } from '../../regions/region';

export enum RegionActionTypes {
  Load = '[Load Regions] Load',
  LoadSuccess = '[Load Regions] Load Success',
  LoadFail = '[Load Regions] Load Fail'
}
export class Load implements Action {
  readonly type = RegionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = RegionActionTypes.LoadSuccess;

  constructor(public payload: Region[]) {}
}

export class LoadFail implements Action {
  readonly type = RegionActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export type RegionActions =
| Load
| LoadSuccess
| LoadFail;
