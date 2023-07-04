import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarketGroupFormComponent } from './market-group-form.component';
import { UtilService } from '../app/util.service'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, MarketGroupFormComponent],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
