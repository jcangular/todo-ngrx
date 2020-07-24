import { createReducer, on } from '@ngrx/store';
import { create, toggle, edit, remove, toggleAll, clearCompleted } from './todo.actions';

import { ToDo } from './models/todo.model';

export const initialState: ToDo[] = [
    new ToDo('Curso de Redux con Angular'),
    new ToDo('Curso Angular Avanzado'),
    new ToDo('Curso de Java'),
    new ToDo('Curso de Golang'),
];

const innerTodoReducer = createReducer(
    initialState,

    on(create, (state, { text }) => [...state, new ToDo(text)]),

    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (id === todo.id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        });
    }),

    on(edit, (state, { id, text }) => {
        return state.map(todo => {
            if (id === todo.id) {
                return { ...todo, text };
            } else {
                return todo;
            }
        });
    }),

    on(remove, (state, { id }) => state.filter(todo => todo.id !== id)),

    on(toggleAll, (state, { completado }) => state.map(todo => {
        return { ...todo, completed: completado };
    })),

    on(clearCompleted, (state) => state.filter(todo => !todo.completed))
);

export function todoReducer(state: ToDo[], action): ToDo[] {
    return innerTodoReducer(state, action);
}