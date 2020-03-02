import { RegionState } from '../state/regions/regions.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface  State {
  regions: RegionState;
}

const getRegionsFeatureState = createFeatureSelector<RegionState>('regions');
export const getRegions = createSelector(getRegionsFeatureState, state => state.regions);

