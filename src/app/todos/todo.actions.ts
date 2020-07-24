import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Crear ToDo',
    props<{ text: string; }>()
);

export const toggle = createAction(
    '[TODO] Toggle ToDo',
    props<{ id: number; }>()
);

export const edit = createAction(
    '[TODO] Editar ToDo',
    props<{ id: number; text: string; }>()
);

export const remove = createAction(
    '[TODO] Borrar ToDo',
    props<{ id: number; }>()
);

export const toggleAll = createAction(
    '[TODO] Toggle All ToDo',
    props<{ completado: boolean; }>()
);

export const clearCompleted = createAction('[TODO] Limpiar ToDo');
