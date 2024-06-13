import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartidaDTO } from '../model/PartidaDTO';
import { JogadaDTO } from '../model/JogadaDTO';
@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  private apiUrl = 'http://localhost:8080/senac-20241-backend-exemplos/rest/partida/iniciar';

  constructor(private http: HttpClient) { }

  iniciarPartida(idJogador: number): Observable<PartidaDTO> {
    const url = `${this.apiUrl}/${idJogador}`;
    return this.http.get<PartidaDTO>(url);
  }

  jogar(jogada: JogadaDTO): Observable<PartidaDTO> {
    return this.http.post<PartidaDTO>(this.apiUrl, jogada);
  }

}
