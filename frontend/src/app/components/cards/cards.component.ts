import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() animais

  constructor( private router: Router) { }

  SCachorros =false;
  Sgatos = false;

  ngOnInit(): void {
    
  }

  itens=[
    {
      label:"Cachorro",
      acao:"MostrarCachorro"
    },
    {
      label:"Gato",
      acao:"MostrarGato"
    },
    {
      label:"Todos",
      acao:"MostrarTodos"
    }
  ]
  cachorros=[
    {
      imagem:"../assets/img/caramelo.jpeg",
      raca:"SRD"
    },
    {
      imagem:"../assets/img/golden.jpg",
      raca:"Golden"
    },
    {
      imagem:"../assets/img/pastor_alemao.jpg",
      raca:"Pastor alemao"
    }
  ]
  gatos=[
    {
      imagem:"../assets/img/bengal.jpg",
      raca:"Bengal"
    },
    {
      imagem:"../assets/img/gato_Persa.jpg",
      raca:"Persa"
    },
    {
      imagem:"../assets/img/shorthair.jpg",
      raca:"Shorthair"
    }
  ]

  fun(a){
    switch(a){
      case 'MostrarCachorro': 
      this.SCachorros=true
      this.Sgatos=false
      break;
      case 'MostrarGato':
        this.Sgatos=true
        this.SCachorros=false
        break;
        case 'MostrarTodos':
          this.SCachorros=true
          this.Sgatos=true
          break;
          default:
            console.log("Não encontrada")
    }
    console.log()
  }

}
