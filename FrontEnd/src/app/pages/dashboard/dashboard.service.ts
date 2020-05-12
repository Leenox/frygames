import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable()

export class GameService{
  constructor(private http : HttpClient){}
  
  getGames(): Observable <any>{ 
    return this.http.get(`${environment.apiUrl}/games`)
  }
}