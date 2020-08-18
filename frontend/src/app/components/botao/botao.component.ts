import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input() itens
  @Output() acao = new EventEmitter()

  constructor() { }


  ngOnInit(): void {
  }
  goTo(acao){
    this.acao.emit(acao) 
  }

}


