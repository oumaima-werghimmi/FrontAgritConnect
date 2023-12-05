import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Culture } from '../models/culture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  private apiUrl = 'http://localhost:3000/culture'; // Remplacez par l'URL correcte de votre API

  constructor(private http: HttpClient) {}

  getCultures(): Observable<Culture[]> {
    return this.http.get<Culture[]>(this.apiUrl);
  }

  ajouterCulture(culture: Culture): Observable<Culture> {
    return this.http.post<Culture>(this.apiUrl, culture);
  }

  getCultureById(id: string): Observable<Culture> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Culture>(url);
  }

  supprimerCulture(cultureId: string): Observable<void> {
    const url = `${this.apiUrl}/${cultureId}`;
    return this.http.delete<void>(url);
  }

  editerCulture(cultureId: string, nouvelleCulture: Culture): Observable<Culture> {
    const url = `${this.apiUrl}/${cultureId}`;
    return this.http.put<Culture>(url, nouvelleCulture);
  }
}
