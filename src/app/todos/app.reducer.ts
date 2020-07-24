import { ToDo } from './models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsOptions } from '@ngrx/store-devtools';

import { todoReducer } from './todo.reducer';
import { filterReducer } from '../filter/filter.reducer';
import { validFilters } from '../filter/filter.actions';
import { environment } from '../../environments/environment';

export interface AppState {
    todos: ToDo[];
    filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};

export const devtoolsOptions: StoreDevtoolsOptions = {
    maxAge: 25,
    logOnly: environment.production,
};
