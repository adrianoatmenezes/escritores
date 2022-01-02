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
  dataPostado: any;

  update() {
    this.id = sessionStorage.getItem('id');
    this.service
      .updateConteudo(
        this.id,
        this.titulo,
        this.texto,
        this.autor,
        this.tipo,
        (this.dataPostado = new Date().toLocaleDateString())
      )
      .subscribe(
        (escritores) => {
          this.escritores = escritores;
          this.route.navigateByUrl('home');
          alert(`O seu texto foi Editado com sucesso!`);
        },
        (err) => {
          alert('Não foi possível editar o seu texto!');
        }
      );
  }

  puxarTextoId() {
    this.id = sessionStorage.getItem('id');
    if (this.id == null) {
      this.route.navigateByUrl('home');
    } else {
      this.service.puxarTextoId(this.id).subscribe((escritores: any[]) => {
        if (escritores.length <= 0) {
          this.route.navigateByUrl('home');
        } else {
          escritores.forEach((resultado) => {
            this.titulo = resultado.titulo;
            this.autor = resultado.titulo;
            this.texto = resultado.texto;
            this.tipo = resultado.tipo;
            this.dataPostado = resultado.dataPostado;
          });
          this.escritores = escritores;
        }
      });
    }
  }

  ngOnInit(): void {
    this.puxarTextoId();
  }
}
