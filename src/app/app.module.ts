import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { JogosMComponent } from './components/seleçoes/jogos-m/jogos-m.component';
import { JogadoresMComponent } from './components/seleçoes/jogadores-m/jogadores-m.component';
import { JogosFComponent } from './components/seleçoes/jogos-f/jogos-f.component';
import { JogadorasFComponent } from './components/seleçoes/jogadoras-f/jogadoras-f.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    JogosMComponent,
    JogadoresMComponent,
    JogosFComponent,
    JogadorasFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
