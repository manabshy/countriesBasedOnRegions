import { RegionState } from '../state/regions/regions.reducer';
import { CountryState } from '../state/countries/countries.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface  State {
  regions: RegionState;
  countries: CountryState;
}

const getRegionsFeatureState = createFeatureSelector<RegionState>('regions');
const getCountriesFeatureState = createFeatureSelector<CountryState>('countries');

export const getRegions = createSelector(getRegionsFeatureState, state => state.regions);

export const getCountries = createSelector(getCountriesFeatureState, state => state.countries);
