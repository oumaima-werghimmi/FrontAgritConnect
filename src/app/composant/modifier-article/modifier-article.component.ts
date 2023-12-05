import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent {

  modifierArticleForm: FormGroup;
  articleId!: string;
  //article: Article = new Article();

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modifierArticleForm = this.formBuilder.group({
      description: ['', Validators.required],
      titre: ['', Validators.required],
      date: [null, Validators.required],
      commentaire: [[]] // Si nécessaire, ajustez le type ici pour représenter la liste de commentaires
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
      this.chargerDetailsArticle();
    });
  }

  chargerDetailsArticle() {
    this.articleService.getArticleById(this.articleId).subscribe(
      (data: Article) => {
        this.remplirFormulaire(data);
      },
      (error) => {
        console.error("Une erreur s'est produite :", error);
        // Gérez l'erreur ici
      }
    );
  }
  
  remplirFormulaire(article: Article) {
    this.modifierArticleForm.patchValue({
      description:article.description,
      titre: article.titre,
      date: article.date,
      commentaire: article.commentaire // Si nécessaire, ajustez en fonction de la structure attendue
    });
  }

  onSubmit() {
    if (this.modifierArticleForm.valid) {
      const nouvelArticle = this.modifierArticleForm.value as Article;
      this.articleService.updateArticle(this.articleId, nouvelArticle).subscribe(() => {
        this.router.navigate(['/gestion-article']);
      });
    } else {
      this.modifierArticleForm.markAllAsTouched();
    }
  }
}
