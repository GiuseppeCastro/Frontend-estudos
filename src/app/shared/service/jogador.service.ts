import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogador } from '../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private apiUrl = 'http://localhost:8080/senac-20241-backend-exemplos/rest/jogador/todos'; // URL do backend

  constructor(private http: HttpClient) { }

  getAllJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.apiUrl);
  }
}
