import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { GridComponent } from '../grid/grid.component';
import { MessageDeleteComponent } from '../message-delete/message-delete.component';
//Components



@NgModule({
  declarations: [
    GridComponent,
    MessageDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GridComponent,
    MessageDeleteComponent
  ],
})
export class SharedModule {}
