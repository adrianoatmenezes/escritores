import { LoginComponent } from './../../pages/login/login.component';
import { Router } from '@angular/router';
import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private service: ServicesService, private route: Router) {}

  usuarios: any = [];
  id: any;
  code: any;
  nome: any;
  admin: number = 2;
  email: any;
  senha: any;
  logado: boolean = false;

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
            this.route.navigateByUrl('home');
          } else {
            this.logado = true;
            localStorage.setItem('logado', JSON.stringify(this.logado));
            if (this.logado) {
              this.usuarios = usuarios;
              this.nome = this.usuarios.nome;
              this.code = this.usuarios.code;
            }
          }
        });
      }
    }
  }

  sair() {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    localStorage.removeItem('logado');
    localStorage.removeItem('code');
    location.reload();
  }

  ngOnInit(): void {
    this.getUserId();
  }
}
