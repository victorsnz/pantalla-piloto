import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';



const Material =[
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatGridListModule,
  MatToolbarModule,
  MatDividerModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatSortModule,
]
@NgModule({
  imports: [Material],
  exports: [Material]
})

export class MaterialModule { }
