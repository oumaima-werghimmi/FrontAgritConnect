import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-ajouter-ressource',
  templateUrl: './ajouter-ressource.component.html',
  styleUrls: ['./ajouter-ressource.component.css']
})
export class AjouterRessourceComponent {

  ressourceForm: FormGroup; // Ensure you have the form group defined

  // Inject FormBuilder in the constructor
  constructor(private fb: FormBuilder, private ressourceService:RessourceService, private router:Router) {
    this.ressourceForm = this.fb.group({
      nom: ['', Validators.required],
      typeRessource: ['', Validators.required],
      quantiteDispo: [0, Validators.required],
      coutUnitaire: [0, Validators.required]
    });

  }

  onSubmit(): void {
    if (this.ressourceForm.valid) {
      const ressourceData = this.ressourceForm.value;
      // Envoyez les données au service pour ajouter la parcelle
      this.ressourceService.ajouterRessource(ressourceData).subscribe(response => {
        // Gérez la réponse, par exemple, redirigez l'utilisateur
        this.router.navigate(['/gestion-ressource']);
      });
    }
  }
}
