import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

const Material =[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule
]
@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
