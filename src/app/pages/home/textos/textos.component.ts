import { Router } from '@angular/router';
import { ServicesService } from '../../../../services/services.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'es-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.scss'],
})
export class TextosComponent implements OnInit {
  escritores: any = [];
  id: any;
  quantidade = 300;
  textoInner: any;
  code: any;
  usuario: any = [];
  codeUser: any;

  constructor(private service: ServicesService, private route: Router) {}

  salvaId(id: any) {
    this.id = sessionStorage.setItem('id', id);
  }

  deletarTexto(id: number) {
    this.service.deletarTexto(id).subscribe((escritores: any[]) => {});
  }

  puxarTexto() {
    this.service.puxarTexto().subscribe((escritores: any[]) => {
      this.escritores = escritores;
      escritores.forEach((resultado) => {
        if (resultado.texto.length > this.quantidade) {
          resultado.texto =
            resultado.texto.substring(0, this.quantidade) + '...';
        } else {
          setInterval(() => {
            this.deletarTexto(resultado.id);
            document.location.reload();
          }, 10);
        }
      });
    });
  }

  getUserId() {
    const objeto =
      JSON.parse(JSON.stringify(localStorage.getItem('user'))) || null;
    if (objeto) {
      this.id = parseInt(objeto[7]);
      if (!this.id) {
        this.route.navigateByUrl('home');
        localStorage.removeItem('user');
        localStorage.removeItem('admin');
        localStorage.removeItem('logado');
        localStorage.removeItem('code');
      } else {
        this.service.puxarUsuarioId(this.id).subscribe((usuarios: any[]) => {
          if (usuarios.length <= 0) {
            localStorage.removeItem('user');
            this.route.navigateByUrl('home');
          } else {
            this.usuario = usuarios;
            console.log((this.codeUser = this.usuario.code));
            if(this.codeUser == this.usuario.code) {
              console.log('é igual porra');
            }
          }
        });
      }
    }
  }

  ngOnInit(): void {
    this.code = localStorage.getItem('code');
    this.puxarTexto();
    this.getUserId();

  }
}
