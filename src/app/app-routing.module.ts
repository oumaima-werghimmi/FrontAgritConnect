import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './composant/dashboard/dashboard.component';
import { ParcelleComponent } from './composant/parcelle/parcelle.component';
import { RessourceComponent } from './composant/ressource/ressource.component';
import { ArticleComponent } from './composant/article/article.component';
import { LectureComponent } from './composant/lecture/lecture.component';
import { CommentaireComponent } from './composant/commentaire/commentaire.component';
import { AgricultureComponent } from './composant/agriculture/agriculture.component';
import { CultureComponent } from './composant/culture/culture.component';
import { AjouterParcelleComponent } from './composant/ajouter-parcelle/ajouter-parcelle.component';
import { AjouterRessourceComponent } from './composant/ajouter-ressource/ajouter-ressource.component';
import { AjouterCultureComponent } from './composant/ajouter-culture/ajouter-culture.component';
import { ModifierRessourceComponent } from './composant/modifier-ressource/modifier-ressource.component';
import { ModifierCultureComponent } from './composant/modifier-culture/modifier-culture.component';
import { ModifierParcelleComponent } from './composant/modifier-parcelle/modifier-parcelle.component';
import { AjouterArticleComponent } from './composant/ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './composant/modifier-article/modifier-article.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestion-agriculture', component: AgricultureComponent },
  { path: 'gestion-parcelle', component: ParcelleComponent },
  { path: 'gestion-ressource', component: RessourceComponent },
  { path: 'gestion-culture', component: CultureComponent },
  { path: 'gestion-article', component: ArticleComponent },
  { path: 'gestion-lecture', component: LectureComponent },
  { path: 'gestion-commentaire', component: CommentaireComponent },
  { path: 'ajouter-parcelle', component: AjouterParcelleComponent },
  { path: 'ajouter-ressource', component: AjouterRessourceComponent },
  { path: 'ajouter-culture', component: AjouterCultureComponent },
  { path: 'modifier-ressource/:id', component: ModifierRessourceComponent },
  { path: 'editer-culture/:id', component: ModifierCultureComponent },
  { path: 'editer-parcelle/:id', component: ModifierParcelleComponent },
  { path: 'modifier-article/:id', component: ModifierArticleComponent },
  { path: 'ajouter-article', component: AjouterArticleComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
