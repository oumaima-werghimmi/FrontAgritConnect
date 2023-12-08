import { Component } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  userData = {
    nom: '',
    prenom: '',
    mail: '',
    pwd: ''
  };

  constructor(private inscriptionService: InscriptionService) {}

  submitForm() {
    // Utilisez le service pour envoyer les données au backend
    this.inscriptionService.registerUser(this.userData).subscribe(
      response => {
        console.log('Données enregistrées avec succès:', response);
        // Vous pouvez également rediriger l'utilisateur après l'inscription
      },
      error => {
        console.error('Erreur lors de l\'enregistrement:', error);
      }
    );
  }

}
