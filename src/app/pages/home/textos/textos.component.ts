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

  constructor(private service: ServicesService) {}

  salvaId(id: any) {
    this.id = sessionStorage.setItem('id', id);
  }

  puxarTexto() {
    this.service.puxarTexto().subscribe((escritores: any[]) => {
      this.escritores = escritores;
      escritores.forEach((resultado) => {
        if (resultado.texto.length > this.quantidade) {
          resultado.texto =
            resultado.texto.substring(0, this.quantidade) + '...';
        }
      });
    });
  }

  ngOnInit(): void {
    this.puxarTexto();
  }
}
