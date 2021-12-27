import { Router } from '@angular/router';
import { ServicesService } from './../../../services/services.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-texto',
  templateUrl: './editar-texto.component.html',
  styleUrls: ['./editar-texto.component.scss'],
})
export class EditarTextoComponent implements OnInit {
  id: any;
  textoConfig: any[] = [];
  titulo: any | string = '';
  texto: any | string = '';
  autor: any | string = '';
  tipo: any | string = '';
  code: any | string = '';
  dataPostado: any = new Date().toLocaleDateString();
  quantidade = 29;

  constructor(private service: ServicesService, private router: Router) {}

  carregarTexto() {
    this.id = localStorage.getItem('id');
    this.service.puxarTextoId(parseInt(this.id)).subscribe((textoConfig) => {
      this.textoConfig = textoConfig;
      if (!textoConfig) {
        this.router.navigateByUrl('home');
      } else {
        console.log(textoConfig);
      }
    });
  }

  ngOnInit(): void {
    this.carregarTexto();
  }
}
