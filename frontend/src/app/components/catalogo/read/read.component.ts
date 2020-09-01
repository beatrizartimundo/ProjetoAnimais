import { Component, OnInit, ViewChild } from '@angular/core';
import {animais} from '../animais.model';
import {ServiceService} from './../service.service';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  Animais : animais[]

  displayedColumns = ['id' , 'tipo' , 'raca'] 

  constructor(private Service : ServiceService) { }


  @ViewChild(MatPaginator, {static:true}) paginator:MatPaginator;
  ngOnInit(): void {

    this.Service.read().subscribe(Animais =>
      {
        this.Animais = Animais
        console.log(Animais)
      })

    //this.dataSource.paginator = this.paginator;  
  }

}
