import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgRx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TodosModule,
        StoreModule.forRoot({ todos: todoReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
