import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CultureService } from 'src/app/services/culture.service';
import { ParcelleService } from 'src/app/services/parcelle.service';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-ajouter-parcelle',
  templateUrl: './ajouter-parcelle.component.html',
  styleUrls: ['./ajouter-parcelle.component.css']
})
export class AjouterParcelleComponent {
  parcelleForm!: FormGroup;
  ressources!:any[];
  cultures!:any[]; 
  constructor(private fb: FormBuilder, private parcelleService: ParcelleService,private ressourceService: RessourceService,private cultureService: CultureService,private router:Router) {
    this.parcelleForm = this.fb.group({
      nom: ['', Validators.required],
      superficie: [[Validators.required, Validators.min(0)]],
      ville: ['', Validators.required],
      coordonner: ['', Validators.required],
      typeSol: ['', Validators.required],
      statue: ['', Validators.required],
      ressource: [[]], // Peut-être une liste de ressources sélectionnées
      culture: [[]]    // Peut-être une liste de cultures sélectionnées
    });
  }

  ngOnInit(): void {
    this.chargerRessources();
    this.chargerCultures();
    // Vous pouvez initialiser certaines valeurs ou effectuer d'autres opérations à l'initialisation
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
  
  onSubmit(): void {
    if (this.parcelleForm.valid) {
      const parcelleData = this.parcelleForm.value;
      // Envoyez les données au service pour ajouter la parcelle
      this.parcelleService.ajouterParcelle(parcelleData).subscribe(response => {
        // Gérez la réponse, par exemple, redirigez l'utilisateur
        this.router.navigate(['/gestion-parcelle']);
      });
    }
  }

}
