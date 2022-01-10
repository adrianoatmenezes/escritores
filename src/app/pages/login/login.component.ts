import { Router } from '@angular/router';
import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'es-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: ServicesService, private route: Router) {}

  usuario: any = [];
  id: any;
  code: any;
  admin: number = 2;
  email: any;
  senha: any;

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
            this.code = localStorage.setItem('code', this.usuario.code);
            if (this.usuario.tipoUser == this.admin) {
              localStorage.setItem('admin', this.usuario.tipoUser);
            }
          }
        });
      }
    }
  }

  login() {
    this.service.verificarLogin(this.email, this.senha).subscribe(
      (usuarios: any[]) => {
        this.usuario = usuarios;
        if (usuarios.length > 0) {
          localStorage.setItem('user', JSON.stringify(usuarios));
          location.reload();
        }
      },
      (err) => {
        alert(err);
      }
    );
  }

  ngOnInit(): void {
    this.getUserId();
  }
}
