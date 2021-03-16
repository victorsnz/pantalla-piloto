import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { SecondaryNavbarComponent } from './components/secondary-navbar/secondary-navbar.component';
import { BodyComponent } from './components/body/body.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { YearPickerComponent } from './components/year-picker/year-picker.component';
import { MonthPickerComponent } from './components/month-picker/month-picker.component';

@NgModule({
  declarations: [
    SecondaryNavbarComponent,
    MonthPickerComponent,
    MainNavbarComponent,
    YearPickerComponent,
    DataTableComponent,
    BodyComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
