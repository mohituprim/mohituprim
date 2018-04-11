
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { FloatButtonComponent } from "./float-button.component";
import { FloatItemButtonComponent } from "./float-item-button.component";


@NgModule({
  declarations: [FloatButtonComponent, FloatItemButtonComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[FloatButtonComponent, FloatItemButtonComponent]
})

export class FloatButtonModule { }