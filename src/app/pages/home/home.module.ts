import { MensagemComponent } from './../../components/mensagem/mensagem.component';
import { FormsModule } from '@angular/forms';
import { CriarTextoModule } from '../../components/criar-Texto/criar-texto.module';
import { CriarTextoComponent } from '../../components/criar-Texto/criar-texto.component';
import { TextosComponent } from './textos/textos.component';
import { HomeComponent } from './home.component';
import { TextosModule } from './textos/textos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent, TextosComponent, CriarTextoComponent, MensagemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CriarTextoModule,
    FormsModule
  ]
})
export class HomeModule { }
