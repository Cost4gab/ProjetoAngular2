import { JogosFComponent } from './components/seleçoes/jogos-f/jogos-f.component';
import { JogadorasFComponent } from './components/seleçoes/jogadoras-f/jogadoras-f.component';
import { JogadoresMComponent } from './components/seleçoes/jogadores-m/jogadores-m.component';
import { JogosMComponent } from './components/seleçoes/jogos-m/jogos-m.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'seleçao/masculina/jogos', component:JogosMComponent},
  {path: 'selecao/masculina/jogadores', component:JogadoresMComponent},
  {path: 'selecao/feminina/jogos', component:JogosFComponent},
  {path: 'selecao/feminina/jogadoras', component:JogadorasFComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
