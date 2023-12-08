import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CultureService } from 'src/app/services/culture.service';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {
  cultures!:any[]; // Remplacez le type avec le modèle de votre parcelle

  constructor(private cultureService: CultureService, private router: Router) {}

  ngOnInit(): void {
    this.chargerCultures();
  }

  chargerCultures(): void {
    // Appelez votre service pour récupérer la liste des parcelles depuis le backend
    this.cultureService.getCultures().subscribe(cultures => {
      this.cultures = cultures;
    });
  }

  supprimerCulture(cultureId: string): void {
    // Appelez votre service pour supprimer la parcelle avec l'ID donné
    this.cultureService.supprimerCulture(cultureId).subscribe(() => {
      this.chargerCultures();
    });
  }

  editerCulture(cultureId: string): void {
    // Redirigez l'utilisateur vers la page d'édition avec l'ID de la parcelle
    this.router.navigate(['/editer-culture', cultureId]);
  }

  // rechargerculture(): void {
  //   this.chargerCu();
  // }
}