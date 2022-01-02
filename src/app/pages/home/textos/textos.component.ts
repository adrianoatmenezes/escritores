import { Router } from '@angular/router';
import { ServicesService } from '../../../../services/services.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'es-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.scss'],
})
export class TextosComponent implements OnInit {
  escritores: any = {};
  id: any;
  quantidade = 300;
  textoInner: any;

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
          var verMais = document.getElementById('verMais');

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

  ngOnInit(): void {
    this.puxarTexto();
  }
}
