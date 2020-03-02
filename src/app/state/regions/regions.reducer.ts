import { Region } from '../../regions/region';
import { RegionActions, RegionActionTypes } from './regions.action';
export interface RegionState {
  regions: Region[];
}
const initialState: RegionState = {
  regions: []
};

export function reducer(
  state = initialState,
  action: RegionActions
): RegionState {
  switch (action.type) {
    case RegionActionTypes.LoadSuccess:
      return {
        ...state,
        regions: action.payload
      };
    default:

      return state;
  }
}
