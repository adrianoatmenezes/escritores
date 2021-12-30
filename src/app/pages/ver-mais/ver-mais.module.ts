import { FormsModule } from '@angular/forms';
import { VerMaisRoutingModule } from './ver-mais-routing.module';
import { VerMaisComponent } from './ver-mais.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VerMaisComponent
  ],
  imports: [
    CommonModule,
    VerMaisRoutingModule,
    FormsModule
  ]
})
export class VerMaisModule { }
