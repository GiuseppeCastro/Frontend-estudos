import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { FormsModule } from '@angular/forms';
import { CartaDetalheComponent } from './carta-detalhe/carta-detalhe.component';
import { NovaPartidaComponent } from './nova-partida/nova-partida.component';
import { RealizarJogadasComponent } from './realizar-jogadas/realizar-jogadas.component';

const routes: Routes = [
  { path: "listagem", component: CartaListagemComponent },
  { path: 'detalhe', component: CartaDetalheComponent },
  { path: 'nova-partida', component: NovaPartidaComponent },
  { path: 'realizar-jogadas', component: RealizarJogadasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class CartasRoutingModule { }
