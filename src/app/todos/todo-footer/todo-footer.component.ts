import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.reducer';
import * as actions from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

    currentFilter: actions.validFilters = 'todas';

    pending: number;

    filters: actions.validFilters[] = ['todas', 'completadas', 'pendientes'];

    constructor(private store: Store<AppState>) {
        this.pending = 0;
    }

    ngOnInit(): void {
        console.log('TodoFooterComponent: ngOnInit');
        this.store.subscribe(({ todos, filter }) => {
            console.log('TodoFooterComponent: state');
            this.currentFilter = filter;
            this.pending = todos.filter(todo => !todo.completed).length;
        });

    }

    setFilter(filter: actions.validFilters): void {
        this.store.dispatch(actions.apply({ filter }));
    }

    clear(): void {
        this.store.dispatch(clearCompleted());
    }

}
