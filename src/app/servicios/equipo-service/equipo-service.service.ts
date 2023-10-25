
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../app.config';
import { Equipo } from 'src/app/models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoServiceService {

  constructor(private httpClient: HttpClient) { }

  getJugadoresPorEquipo():Observable<any[]> {
    return this.httpClient.get<any[]>(`${API_URL}equipo/jugadores`)
  }

  editarEquipo(equipo:Equipo):Observable<Equipo[]> {
    return this.httpClient.post<Equipo[]>(`${API_URL}equipo/actualizar`, equipo)
  }
}
