import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromFilter from './filter.reducer';

export interface State {
  filter: fromFilter.State;
}

export const reducers: ActionReducerMap<State> = {
  filter: fromFilter.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getTasks = createFeatureSelector<State>('tasks');

export const getFilter = createSelector( 
  getTasks,
  (state) =>  state.filter
)

export const getCurrentFilter= createSelector(
  getFilter,
  (state) => state.currentFilter
)

