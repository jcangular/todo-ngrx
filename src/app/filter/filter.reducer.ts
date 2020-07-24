import { createReducer, on } from '@ngrx/store';

import { validFilters, apply } from './filter.actions';


export const initialState: validFilters = 'todas';

const innerFilterReducer = createReducer(
    initialState,
    on(apply, (state, { filter }) => filter)
);

export function filterReducer(state: validFilters, action): validFilters {
    return innerFilterReducer(state, action);
}
