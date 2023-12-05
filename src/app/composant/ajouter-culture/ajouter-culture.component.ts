import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CultureService } from 'src/app/services/culture.service';

@Component({
  selector: 'app-ajouter-culture',
  templateUrl: './ajouter-culture.component.html',
  styleUrls: ['./ajouter-culture.component.css']
})
export class AjouterCultureComponent {
  cultureForm: FormGroup; // Ensure you declare ressourceForm property

  constructor(private fb: FormBuilder, private cultureService:CultureService, private router:Router) {
    this.cultureForm = this.fb.group({
      nom: ['', Validators.required],
      methode: ['', Validators.required],
      datePlantation: ['', Validators.required],
      dateRecolte: ['', Validators.required],
      rendement: [0, Validators.required],
      cout: [0, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.cultureForm.valid) {
      const cultureData = this.cultureForm.value;
      // Envoyez les données au service pour ajouter la parcelle
      this.cultureService.ajouterCulture(cultureData).subscribe(response => {
        // Gérez la réponse, par exemple, redirigez l'utilisateur
        this.router.navigate(['/gestion-culture']);
      });
    }
  }

}
