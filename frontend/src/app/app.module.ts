import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './components/botao/botao.component';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './estrutura/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './estrutura/nav/nav.component';
import { FooterComponent } from './estrutura/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatCardModule} from '@angular/material/card';
import{MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    CardsComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
