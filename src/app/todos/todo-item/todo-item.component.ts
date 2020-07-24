import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../app.reducer';
import * as actions from '../todo.actions';
import { ToDo } from '../models/todo.model';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: ToDo;
    @ViewChild('inputEdit') inputEdit: ElementRef<HTMLInputElement>;

    chkCompleted: FormControl;
    txtInput: FormControl;
    editando: boolean;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.chkCompleted = new FormControl(this.todo.completed);
        this.txtInput = new FormControl(this.todo.text, Validators.required);

        this.chkCompleted.valueChanges.subscribe(valor => {
            this.store.dispatch(actions.toggle({ id: this.todo.id }));
        });
    }

    editTodo(): void {
        this.editando = true;
        // en caso de que esté en blanco el input
        this.txtInput.setValue(this.todo.text);
        setTimeout(() => this.inputEdit.nativeElement.select(), 10);
    }

    doneEdit(): void {
        this.editando = false;
        if (this.txtInput.invalid) { return; }
        if (this.txtInput.value === this.todo.text) { return; }

        this.store.dispatch(actions.edit(
            { id: this.todo.id, text: this.txtInput.value }
        ));
    }

    remove(): void {
        this.store.dispatch(actions.remove({ id: this.todo.id }));
    }

}
