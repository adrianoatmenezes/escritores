import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-criar',
  templateUrl: './criar-texto.component.html',
  styleUrls: ['./criar-texto.component.scss'],
})
export class CriarTextoComponent implements OnInit {
  titulo: any | string = '';
  texto: any | string = '';
  autor: any | string = '';
  tipo: any | string = '';
  dataPostado: any = new Date().toLocaleDateString();

  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit(): void {}

  limparDados() {
    localStorage.clear();
  }

  salvarDados() {
    localStorage.setItem('titulo', this.titulo);
    localStorage.setItem('texto', this.texto);
    localStorage.setItem('autor', this.autor);
    localStorage.setItem('tipo', this.tipo);
  }

  carregarDados() {
    let getTitulo = localStorage.getItem('titulo');
    let getTexto = localStorage.getItem('texto');
    let getAutor = localStorage.getItem('autor');
    let getTipo = localStorage.getItem('tipo');

    this.titulo = getTitulo?.toString();
    this.texto = getTexto?.toString();
    this.autor = getAutor?.toString();
    this.tipo = getTipo?.toString();
  }

  criarTexto() {
    if (this.titulo != '' && this.texto != '' && this.autor != '') {
      this.service
        .postText(
          this.titulo,
          this.texto,
          this.autor,
          this.tipo,
          this.dataPostado
        )
        .subscribe(
          (resultado) => {
            this.router.navigate(['#']);
          },
          (err) =>
            alert(
              'não foi possível criar o seu texto/poesia, tente novamente mais tarde!'
            )
        );
    } else {
      alert('não foi possível criar o seu texto/poesia');
    }
  }
}
