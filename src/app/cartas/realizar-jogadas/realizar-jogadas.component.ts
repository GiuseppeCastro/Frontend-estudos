import { Component, OnInit } from '@angular/core';
import { Jogador } from '../../shared/model/jogador';
import { JogadorService } from '../../shared/service/jogador.service';

@Component({
  selector: 'app-realizar-jogadas',
  standalone: true,
  imports: [],
  templateUrl: './realizar-jogadas.component.html',
  styleUrl: './realizar-jogadas.component.scss'
})
export class RealizarJogadasComponent implements OnInit{

  jogadores: Jogador[] = [];

  constructor(private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.jogadorService.getAllJogadores().subscribe(
      data => {
        this.jogadores = data;
      },
      error => {
        console.error('Erro ao buscar jogadores', error);
      }
    );
  }
}
