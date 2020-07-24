import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../todos/app.reducer';
import * as actions from '../../todos/todo.actions';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

    txtInput: FormControl;

    constructor(private store: Store<AppState>) {
        this.txtInput = new FormControl(
            '',
            Validators.required
        );
    }

    ngOnInit(): void {
    }

    addTodo(): void {

        // si el input no es válido no hace nada.
        if (this.txtInput.invalid) {
            return null;
        }

        const text = this.txtInput.value;
        this.store.dispatch(actions.create({ text }));
        this.txtInput.reset();
    }

}
