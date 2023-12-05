import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parcelle } from 'src/app/models/parcelle';
import { CultureService } from 'src/app/services/culture.service';
import { ParcelleService } from 'src/app/services/parcelle.service';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-modifier-parcelle',
  templateUrl: './modifier-parcelle.component.html',
  styleUrls: ['./modifier-parcelle.component.css']
})
export class ModifierParcelleComponent {

  modifierParcelleForm: FormGroup;
  parcelleId!: string;
  ressources!:any[];
  cultures!:any[];

  constructor(
    private formBuilder: FormBuilder,
    private parcelleService: ParcelleService,
    private route: ActivatedRoute,
    private router: Router,
    private ressourceService: RessourceService,private cultureService: CultureService
  ) {
    this.modifierParcelleForm = this.formBuilder.group({
      nom: ['', Validators.required],
      superficie: [null, Validators.required],
      ville: ['', Validators.required],
      coordonner: ['', Validators.required],
      typeSol: ['', Validators.required],
      statue: ['', Validators.required],
      ressource: [[]], // Vous pouvez laisser vide ou ajouter une logique pour les références
      culture: [[]]    // Vous pouvez laisser vide ou ajouter une logique pour les références
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parcelleId = params['id'];
      this.chargerDetailsParcelle();
      this.chargerRessources();
    this.chargerCultures();
    });
  }
  
  chargerCultures(): void {
    // Appelez votre service pour récupérer la liste des parcelles depuis le backend
    this.cultureService.getCultures().subscribe(cultures => {
      this.cultures = cultures;
    });
  }

  chargerRessources(): void {
    // Appelez votre service pour récupérer la liste des parcelles depuis le backend
    this.ressourceService.getRessources().subscribe(ressources => {
      this.ressources = ressources;
    });
  }

  chargerDetailsParcelle() {
    this.parcelleService.getparcelleById(this.parcelleId).subscribe(
      (data: Parcelle) => {
        this.remplirFormulaire(data);
      },
      (error) => {
        console.error("Une erreur s'est produite :", error);
        // Gérez l'erreur ici
      }
    );
  }
  
  remplirFormulaire(data: Parcelle) {
    this.modifierParcelleForm.patchValue({
      nom: data.nom,
      superficie: data.superficie,
      ville: data.ville,
      coordonner: data.coordonner,
      typeSol: data.typeSol,
      statue: data.statue,
      ressource: data.ressource, // Assurez-vous de gérer correctement les références
      culture: data.culture      // Assurez-vous de gérer correctement les références
    });
  }

  onSubmit() {
    if (this.modifierParcelleForm.valid) {
      const nouvelleParcelle = this.modifierParcelleForm.value as Parcelle;
      this.parcelleService.editerParcelle(this.parcelleId, nouvelleParcelle).subscribe(() => {
        this.router.navigate(['/gestion-parcelle']);
      });
    } else {
      this.modifierParcelleForm.markAllAsTouched();
    }
  }
}
