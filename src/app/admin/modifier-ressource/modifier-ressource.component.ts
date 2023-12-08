import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RessourceService } from '../../services/ressource.service'; // Assurez-vous d'importer votre service de ressource
import { Ressource } from 'src/app/models/ressource';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-ressource',
  templateUrl: './modifier-ressource.component.html',
  styleUrls: ['./modifier-ressource.component.css']
})
export class ModifierRessourceComponent implements OnInit {
  modifierRessourceForm: FormGroup;
  ressourceId!: string; // Supposons que vous avez l'ID de la ressource à modifier

  constructor(private formBuilder: FormBuilder, private ressourceService: RessourceService, private route: ActivatedRoute,
    private router: Router) {
    this.modifierRessourceForm = this.formBuilder.group({
      nom: ['', Validators.required],
      typeRessource: ['', Validators.required],
      quantiteDispo: [null],
      coutUnitaire: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ressourceId = params['id']; // Assurez-vous que 'id' correspond au paramètre d'URL pour l'ID de la ressource
      this.chargerDetailsRessource(); // Chargez les détails de la ressource une fois que vous avez l'ID
    });
  }

  chargerDetailsRessource() {
    this.ressourceService.getRessourceById(this.ressourceId).subscribe(
      (data: Ressource) => {
        this.remplirFormulaire(data); // Appel d'une fonction pour remplir le formulaire avec les détails récupérés
      },
      (error) => {
        console.error("Une erreur s'est produite :", error);
        // Gérez l'erreur ici (par exemple, affichage d'un message d'erreur à l'utilisateur)
      }
    );
  }
  
  remplirFormulaire(data: Ressource) {
    this.modifierRessourceForm.patchValue({
      nom: data.nom,
      typeRessource: data.typeRessource,
      quantiteDispo: data.quantiteDispo,
      coutUnitaire: data.coutUnitaire
    });
  }
  

  onSubmit() {
    if (this.modifierRessourceForm.valid) {
      const nouvelleRessource = this.modifierRessourceForm.value;
      this.ressourceService.editerRessource(this.ressourceId, nouvelleRessource).subscribe((result) => {
        this.router.navigate(['/gestion-ressource']);

        // Gérez la réponse de la modification ici, par exemple, une confirmation ou une redirection
      });
      
    } else {
      // Marquez les champs du formulaire comme touchés pour afficher les erreurs si nécessaire
      this.modifierRessourceForm.markAllAsTouched();
    }
  }
}
