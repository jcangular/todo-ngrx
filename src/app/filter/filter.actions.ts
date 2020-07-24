import { createAction, props } from '@ngrx/store';

export type validFilters = 'todas' | 'completadas' | 'pendientes';

export const apply = createAction(
    '[FILTER] Aplicar Filtro',
    props<{ filter: validFilters; }>()
);
