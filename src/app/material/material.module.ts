import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule ,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
