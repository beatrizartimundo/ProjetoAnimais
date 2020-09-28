import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudComponent} from './estrutura/crud/crud.component';
import {CreateComponent} from './components/catalogo/create/create.component';
import {UpdateComponent} from './components/catalogo/update/update.component';
import {DeleteComponent} from './components/catalogo/delete/delete.component';
import {CardsComponent} from './components/cards/cards.component';
  import { from } from 'rxjs';


const routes: Routes = [
  {
  path:"cadastro",
  component:CrudComponent
  },
  {
    path:"cadastro/create",
    component:CreateComponent
  },
  {
    path:"cadastro/update/:id",
    component:UpdateComponent
  },
  {
    path:"cadastro/delete/:id",
    component:DeleteComponent
  },
  {
    path: "listagem",
    component:CardsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
