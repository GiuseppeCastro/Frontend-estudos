import { Component, OnInit } from '@angular/core';
import { Carta } from '../../shared/model/carta';
import { CartasService } from '../../shared/service/cartas.service';
import { CartaSeletor } from '../../shared/model/seletor/carta.seletor';
// Remove a importação do FormsModule daqui

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrls: ['./carta-listagem.component.scss']
})
export class CartaListagemComponent implements OnInit {

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

  constructor(private cartasService: CartasService) {}

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  public pesquisar() {
    this.cartasService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('Erro ao consultar cartas', erro);
      }
    );
  }

  public limpar(){
    this.seletor = new CartaSeletor();
  }

  private consultarTodasCartas() {
    this.cartasService.listarTodas().subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('Erro ao consultar cartas', erro);
        // TODO evoluir para mostrar a mensagem de erro ao usuário na tela
      }
    );
  }
}
