import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent {

  ajoutArticleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService, private router:Router) {
    this.ajoutArticleForm = this.formBuilder.group({
      description: ['', Validators.required],
      titre: ['', Validators.required],
      date: [null, Validators.required] // Peut-être utiliser un contrôle de date approprié dans votre formulaire
    });
  }

  onSubmit() {
    if (this.ajoutArticleForm.valid) {
      const nouvelArticle = this.ajoutArticleForm.value;
      this.articleService.createArticle(nouvelArticle).subscribe((result) => {
        this.router.navigate(['/gestion-article']);
        // Gérez la réponse de l'ajout ici, par exemple, une confirmation ou une redirection
      });
    } else {
      // Marquez les champs du formulaire comme touchés pour afficher les erreurs si nécessaire
      this.ajoutArticleForm.markAllAsTouched();
    }
  }
}
