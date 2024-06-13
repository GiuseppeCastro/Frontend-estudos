import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Carta } from './shared/model/carta';

export const routes: Routes = [
  { path: '', redirectTo: 'cartas', pathMatch: 'full' },
  {
    path: 'cartas',
    loadChildren:() => import('./cartas/cartas.module').then(m => m.CartasModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

