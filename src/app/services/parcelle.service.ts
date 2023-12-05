import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parcelle } from '../models/parcelle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelleService {

  private apiUrl = 'http://localhost:3000/parcelle'; // Remplacez par l'URL correcte de votre API

  constructor(private http: HttpClient) {}

  getParcelles(): Observable<Parcelle[]> {
    return this.http.get<Parcelle[]>(this.apiUrl);
  }

  ajouterParcelle(parcelle: Parcelle): Observable<Parcelle> {
    return this.http.post<Parcelle>(this.apiUrl, parcelle);
  }

  getparcelleById(id: string): Observable<Parcelle> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Parcelle>(url);
  }

  supprimerParcelle(parcelleId: string): Observable<void> {
    const url = `${this.apiUrl}/${parcelleId}`;
    return this.http.delete<void>(url);
  }

  editerParcelle(parcelleId: string, nouvelleParcelle: Parcelle): Observable<Parcelle> {
    const url = `${this.apiUrl}/${parcelleId}`;
    return this.http.put<Parcelle>(url, nouvelleParcelle);
  }
}
