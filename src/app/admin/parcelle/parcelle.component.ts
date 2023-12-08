
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcelleService } from 'src/app/services/parcelle.service';



@Component({
  selector: 'app-parcelle',
  templateUrl: './parcelle.component.html',
  styleUrls: ['./parcelle.component.css']
})
export class ParcelleComponent implements OnInit {
  parcelles!:any[]; // Remplacez le type avec le modèle de votre parcelle

  constructor(private parcelleService: ParcelleService, private router: Router) {}

  ngOnInit(): void {
    this.chargerParcelles();
  }

  chargerParcelles(): void {
    // Appelez votre service pour récupérer la liste des parcelles depuis le backend
    this.parcelleService.getParcelles().subscribe(parcelles => {
      this.parcelles = parcelles;
    });
  }

  supprimerParcelle(parcelleId: string): void {
    // Appelez votre service pour supprimer la parcelle avec l'ID donné
    this.parcelleService.supprimerParcelle(parcelleId).subscribe(() => {
      this.chargerParcelles();
    });
  }

  editerParcelle(parcelleId: string): void {
    // Redirigez l'utilisateur vers la page d'édition avec l'ID de la parcelle
    this.router.navigate(['/editer-parcelle', parcelleId]);
  }

  rechargerParcelles(): void {
    this.chargerParcelles();
  }

}
