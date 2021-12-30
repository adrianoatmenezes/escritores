import { EditarTextoComponent } from './editar-texto.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarTextoRoutingModule } from './editar-texto-routing.module';


@NgModule({
  declarations: [EditarTextoComponent],
  imports: [
    CommonModule,
    EditarTextoRoutingModule,
    FormsModule
  ]
})
export class EditarTextoModule { }
