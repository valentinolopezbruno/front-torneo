import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class JugadorServiceService {

  constructor(private httpClient: HttpClient) { }

  getJugador():Observable<any[]> {
    return this.httpClient.get<any[]>(`${API_URL}jugador`)
  }
}
