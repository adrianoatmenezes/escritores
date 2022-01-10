import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {}

  reset() {
    let id = sessionStorage.removeItem('id');

    return id;
  }

  ngOnInit(): void {
    this.reset();
  }
}
