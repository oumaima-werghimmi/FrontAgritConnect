import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  ressources!:any[]; // Remplacez le type avec le modèle de votre parcelle

  constructor(private ressourceService: RessourceService, private router: Router) {}

  ngOnInit(): void {
    this.chargerRessources();
  }

  chargerRessources(): void {
    // Appelez votre service pour récupérer la liste des parcelles depuis le backend
    this.ressourceService.getRessources().subscribe(ressources => {
      this.ressources = ressources;
    });
  }

  supprimerRessource(parcelleId: string): void {
    // Appelez votre service pour supprimer la parcelle avec l'ID donné
    this.ressourceService.supprimerRessource(parcelleId).subscribe(() => {
      this.chargerRessources();
    });
  }

  editerRessource(ressourceId: string): void {
    // Redirigez l'utilisateur vers la page d'édition avec l'ID de la parcelle
    this.router.navigate(['/modifier-ressource', ressourceId]);
  }

  rechargerParcelles(): void {
    this.chargerRessources();
  }
}
