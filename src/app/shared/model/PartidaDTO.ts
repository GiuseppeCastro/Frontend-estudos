import { CartaNaPartida } from "./CartaNaPartida";

export class PartidaDTO {
    idPartida: number;
    cartasJogador: CartaNaPartida[];
    atributosDisponiveis: string[];
    resultadoUltimaJogada: string;
  }
