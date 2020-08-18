import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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
