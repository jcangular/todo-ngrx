import { Pipe, PipeTransform } from '@angular/core';

import { ToDo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
    name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

    transform(todos: ToDo[], filter: validFilters): ToDo[] {

        switch (filter) {
            case 'completadas':
                return todos.filter(todo => todo.completed);
            case 'pendientes':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }

    }

}
