import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ressource } from '../models/ressource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private apiUrl = 'http://localhost:3000/ressource'; // Remplacez par l'URL correcte de votre API

  constructor(private http: HttpClient) {}

  getRessources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.apiUrl);
  }

  getRessourceById(id: string): Observable<Ressource> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ressource>(url);
  }
  
  ajouterRessource(ressource: Ressource): Observable<Ressource> {
    return this.http.post<Ressource>(this.apiUrl, ressource);
  }

  supprimerRessource(parcelleId: string): Observable<void> {
    const url = `${this.apiUrl}/${parcelleId}`;
    return this.http.delete<void>(url);
  }

  editerRessource(ressourceId: string, nouvelleRessource: Ressource): Observable<Ressource> {
    const url = `${this.apiUrl}/${ressourceId}`;
    return this.http.put<Ressource>(url, nouvelleRessource);
  }
}
