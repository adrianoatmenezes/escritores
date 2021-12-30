import { Router } from '@angular/router';
import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-ver-mais',
  templateUrl: './ver-mais.component.html',
  styleUrls: ['./ver-mais.component.scss'],
})
export class VerMaisComponent implements OnInit {
  id: any;

  constructor(private service: ServicesService, private route: Router) {}

  escritores: any[] = [];

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
