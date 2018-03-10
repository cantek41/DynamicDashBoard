import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//PrimeNg
import { ButtonModule,DataTableModule } from 'primeng/primeng'; 

//Component
import { AppComponent }  from './app.component';

//Services
import { BaseService } from './services/base.service';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ButtonModule,
        DataTableModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        BaseService,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
