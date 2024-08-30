import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }
  getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(`${environment.baseUrl}/music`);

  }
  getMusicById(id: number | String):Observable<Music> {
    return this.http.get<Music>(`${environment.baseUrl}/music/${id}`)
  }
  
}
