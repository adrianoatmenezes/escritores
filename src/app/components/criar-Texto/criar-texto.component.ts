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
  code: any | string = '';
  dataPostado: any = new Date().toLocaleDateString();
  quantidade = 29;
  escritores: any[] = [];

  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit(): void {
  }

  textoAleatorio(tamanho: any) {
    var letras =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var aleatorio = '';
    for (var i = 0; i < tamanho; i++) {
      var rnum = Math.floor(Math.random() * letras.length);
      aleatorio += letras.substring(rnum, rnum + 1);
    }
    return aleatorio;
  }

  contarLinhas(texto: any) {
    let calcTexto = texto?.length / 90 - 0.6;

    console.log(calcTexto);

    return calcTexto;
  }

  limparDados() {
    localStorage.removeItem('titulo');
    localStorage.removeItem('texto');
    localStorage.removeItem('autor');
    localStorage.removeItem('tipo');
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
    if (this.code == null) {
      localStorage.setItem(
        'code',
        (this.code = this.textoAleatorio(this.quantidade))
      );
    } else {
      this.code = localStorage.getItem('code');
    }

    if (this.texto.length > 300) {
      if (
        this.titulo != '' &&
        this.texto != '' &&
        this.autor != '' &&
        this.tipo != ''
      ) {
        this.service
          .postText(
            this.titulo,
            this.texto,
            this.autor,
            this.tipo,
            this.code,
            this.dataPostado
          )
          .subscribe(
            (resultado) => {
              location.reload();
            },
            (err) =>
              alert(
                'não foi possível criar o seu texto/poesia, tente novamente mais tarde!'
              )
          );
      } else {
        alert('não foi possível criar o seu texto/poesia');
      }
    } else {
      alert('O Texto tem que conter mais de 300 caracteres!');
    }
  }
}
