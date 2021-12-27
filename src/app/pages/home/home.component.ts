import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  resetId() {
    let id = localStorage.removeItem('id');
    return id;
  }

  ngOnInit(): void {
    this.resetId();
  }
}