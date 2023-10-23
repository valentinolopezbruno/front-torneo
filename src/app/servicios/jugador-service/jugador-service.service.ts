import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../app.config';
import { Jugador } from 'src/app/models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorServiceService {

  constructor(private httpClient: HttpClient) { }

  getJugador():Observable<any[]> {
    return this.httpClient.get<any[]>(`${API_URL}jugador`)
  }

  crearJugador(jugador:Jugador):Observable<any[]> {
    return this.httpClient.post<any[]>(`${API_URL}jugador/crear`,jugador)
  }

  eliminarJugador(jugador:Jugador):Observable<Jugador> {
    return this.httpClient.post<Jugador>(`${API_URL}jugador/eliminar`,jugador)
  }

}
