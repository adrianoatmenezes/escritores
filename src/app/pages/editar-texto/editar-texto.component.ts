import { Router } from '@angular/router';
import { ServicesService } from './../../../services/services.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-texto',
  templateUrl: './editar-texto.component.html',
  styleUrls: ['./editar-texto.component.scss'],
})
export class EditarTextoComponent implements OnInit {
  constructor(private service: ServicesService, private route: Router) {}

  id: any;
  escritores: any[] = [];
  titulo: any;
  texto: any;
  autor: any;
  tipo: any;
  dataPostado: any = new Date().toLocaleDateString();

  update() {
    this.id = sessionStorage.getItem('id');
    this.service
      .updateConteudo(
          this.id,
          this.titulo,
          this.texto,
          this.autor,
          this.tipo,
          this.dataPostado
      )
      .subscribe((escritores) => {
        this.escritores = escritores;
      });
  }

  puxarTextoId() {
    this.id = sessionStorage.getItem('id');
    this.service.puxarTextoId(this.id).subscribe((escritores: any[]) => {
      if (escritores.length <= 0) {
        this.route.navigateByUrl('home');
      } else {
        this.escritores = escritores;
      }
    });
  }

  ngOnInit(): void {
    this.puxarTextoId();
  }
}
