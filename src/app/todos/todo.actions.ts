import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Crear ToDo',
    props<{ text: string; }>()
);

