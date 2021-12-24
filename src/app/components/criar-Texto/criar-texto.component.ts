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

  limparEmoji(texto: string) {
    texto.replace(
      /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
      texto
    );
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
