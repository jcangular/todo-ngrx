import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers, devtoolsOptions } from './todos/app.reducer';

// enviroment
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        TodosModule,
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument(devtoolsOptions),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
