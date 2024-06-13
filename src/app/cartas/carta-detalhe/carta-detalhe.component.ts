import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carta-detalhe',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './carta-detalhe.component.html',
  styleUrls: ['./carta-detalhe.component.scss']
})
export class CartaDetalheComponent {
  carta: any = {
    nome: '',
    forca: 1,
    inteligencia: 1,
    velocidade: 1
  };

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/listagem']);  // Altere para a rota correta conforme sua aplicação
  }

  salvar() {
    // Simulação de uma chamada de serviço para salvar a carta
    // Em um cenário real, você pode substituir isso por uma chamada de serviço HTTP
    try {
      // Lógica de salvamento (por exemplo, chamada de serviço)
      console.log('Carta salva:', this.carta);

      // Exibe uma mensagem de sucesso usando SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'A carta foi salva com sucesso!'
      });

      // Redireciona ou executa outras ações após o salvamento
    } catch (error) {
      // Exibe uma mensagem de erro usando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Ocorreu um erro ao salvar a carta. Tente novamente mais tarde.'
      });
    }
  }
}
