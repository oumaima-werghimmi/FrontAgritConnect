import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CultureService } from '../../services/culture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Culture } from '../../models/culture'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-modifier-culture',
  templateUrl: './modifier-culture.component.html',
  styleUrls: ['./modifier-culture.component.css']
})
export class ModifierCultureComponent implements OnInit {
  modifierCultureForm: FormGroup;
  cultureId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private cultureService: CultureService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modifierCultureForm = this.formBuilder.group({
      nom: ['', Validators.required],
      methode: ['', Validators.required],
      datePlantation: [null, Validators.required],
      dateRecolte: [null, Validators.required],
      rendement: [null, Validators.required],
      cout: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cultureId = params['id'];
      this.chargerDetailsCulture();
    });
  }

  chargerDetailsCulture() {
    this.cultureService.getCultureById(this.cultureId).subscribe(
      (data: Culture) => {
        this.remplirFormulaire(data);
      },
      (error) => {
        console.error("Une erreur s'est produite :", error);
        // Gérez l'erreur ici
      }
    );
  }
  
  remplirFormulaire(data: Culture) {
    this.modifierCultureForm.patchValue({
      nom: data.nom,
      methode: data.methode,
      datePlantation: data.datePlantation,
      dateRecolte: data.dateRecolte,
      rendement: data.rendement,
      cout: data.cout
    });
  }

  onSubmit() {
    if (this.modifierCultureForm.valid) {
      const nouvelleCulture = this.modifierCultureForm.value as Culture;
      this.cultureService.editerCulture(this.cultureId, nouvelleCulture).subscribe(() => {
        this.router.navigate(['/gestion-culture']);
      });
    } else {
      this.modifierCultureForm.markAllAsTouched();
    }
  }
}
