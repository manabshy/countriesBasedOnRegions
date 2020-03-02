import { Country } from '../../regions/country';
import { CountryActions, CountryActionTypes } from './countries.action';
export interface CountryState {
  countries: Country[];
}
const initialState: CountryState = {
  countries: []
};

export function reducer(
  state = initialState,
  action: CountryActions
): CountryState {
  switch (action.type) {
    case CountryActionTypes.LoadSuccess:
      return {
        ...state,
        countries: action.payload
      };
    default:

      return state;
  }
}
