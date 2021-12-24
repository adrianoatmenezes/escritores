import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cp-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss'],
})
export class MensagemComponent implements OnInit {
  @Input() mensagem = '';

  constructor() {}

  ngOnInit(): void {}
}
