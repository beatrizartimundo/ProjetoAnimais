import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudComponent} from './estrutura/crud/crud.component';
import {CreateComponent} from './components/catalogo/create/create.component';
import {UpdateComponent} from './components/catalogo/update/update.component';
import {DeleteComponent} from './components/catalogo/delete/delete.component';


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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
