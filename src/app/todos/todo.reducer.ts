import { createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { ToDo } from './models/todo.model';
import { TypedAction } from '@ngrx/store/src/models';

export const initialState: ToDo[] = [];

const innerTodoReducer = createReducer(initialState,
    on(create, (state, { text }) => [...state, new ToDo(text)])
);

export function todoReducer(state: ToDo[], action): ToDo[] {
    return innerTodoReducer(state, action);
}