import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { JogadorService } from '../../shared/service/jogador.service';
import { PartidaService } from '../../shared/service/partida.service';
import { Jogador } from '../../shared/model/jogador';
import { PartidaDTO } from '../../shared/model/PartidaDTO';

@Component({
  selector: 'app-nova-partida',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './nova-partida.component.html',
  styleUrls: ['./nova-partida.component.scss']
})
export class NovaPartidaComponent implements OnInit {

  jogadores: Jogador[] = [];
  selectedJogadorId: number = 0;
  partidaDTO: PartidaDTO | null = null;

  constructor(private jogadorService: JogadorService, private partidaService: PartidaService) { }

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

  jogar(): void {
    if (this.selectedJogadorId === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Por favor, selecione um jogador antes de jogar!',
      });
      return;
    }

    this.partidaService.iniciarPartida(this.selectedJogadorId).subscribe(
      partida => {
        this.partidaDTO = partida;
        const jogador = this.jogadores.find(j => j.id === this.selectedJogadorId);
        const nomeJogador = jogador ? jogador.nome : this.selectedJogadorId;
        Swal.fire({
          icon: 'success',
          title: 'Partida criada',
          text: `Novo X1 #${partida.idPartida} criado para o usuário ${nomeJogador}!`,
        });
      },
      error => {
        console.error('Erro ao criar partida', error);
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao criar nova partida. Por favor, tente novamente mais tarde.',
        });
      }
    );
  }

  formatarData(data: Date): string {
    const dia = ('0' + data.getDate()).slice(-2);
    const mes = ('0' + (data.getMonth() + 1)).slice(-2);
    const ano = data.getFullYear();
    return '${dia}/${mes}/${ano}';
  }

}
