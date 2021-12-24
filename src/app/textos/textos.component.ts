import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.scss'],
})
export class TextosComponent implements OnInit {
  escritores: any[] = [];

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.service.puxarTexto().subscribe((escritores: any[]) => {
      this.escritores = escritores;
    });
  }
}
