import { Component, OnInit } from '@angular/core';
import {animais} from './../animais.model';
import {ServiceService} from './../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Animais: animais = {
    raca: '',
    tipo: ''
  }

  constructor( private router:Router,
    private service: ServiceService) { }

  ngOnInit(): void {
  }

}
