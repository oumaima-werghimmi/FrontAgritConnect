import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agriculteur } from '../models/agriculteur';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = 'http://localhost:3000/agriculteur'; // Remplacez par l'URL de votre backend

constructor(private http: HttpClient) {}


getAgriculteur(): Observable<Agriculteur[]> {
  return this.http.get<Agriculteur[]>(this.apiUrl);
}
registerUser(userData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}`, userData);
  
}

user: Agriculteur | undefined;
}
