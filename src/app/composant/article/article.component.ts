import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  articles: Article[] = [];
  articleForm: FormGroup;

  constructor(private articleService: ArticleService, private formBuilder: FormBuilder,private router:Router) {
    this.articleForm = this.formBuilder.group({
      description: ['', Validators.required],
      titre: ['', Validators.required],
      date: [null, Validators.required],
      commentaire: [[]]
    });
  }

  ngOnInit(): void {
    this.chargerArticles();
  }

  chargerArticles(): void {
    this.articleService.getAllArticles().subscribe(articles => {
      this.articles = articles;
    });
  }



  supprimerArticle(articleId: string): void {
    // Appelez votre service pour supprimer la parcelle avec l'ID donné
    this.articleService.deleteArticle(articleId).subscribe(() => {
      this.chargerArticles();
    });
  }

  editerArticle(articleId: string): void {
    // Redirigez l'utilisateur vers la page d'édition avec l'ID de la parcelle
    this.router.navigate(['/modifier-article', articleId]);
  }

}
 