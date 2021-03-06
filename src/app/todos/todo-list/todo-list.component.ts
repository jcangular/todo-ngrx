import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Store } from '@ngrx/store';


import { AppState } from '../app.reducer';
import { validFilters } from '../../filter/filter.actions';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos: ToDo[] = [];
    currentFilter: validFilters;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.store
            //.select('todos')
            .subscribe(({ todos, filter }) => {
                console.log('TodoListComponent: state');
                this.todos = todos;
                this.currentFilter = filter;
            });
    }

}
