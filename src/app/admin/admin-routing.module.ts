import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ParcelleComponent } from './parcelle/parcelle.component';
import { RessourceComponent } from './ressource/ressource.component';
import { CultureComponent } from './culture/culture.component';
import { ArticleComponent } from './article/article.component';
import { LectureComponent } from './lecture/lecture.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AjouterParcelleComponent } from './ajouter-parcelle/ajouter-parcelle.component';
import { AjouterRessourceComponent } from './ajouter-ressource/ajouter-ressource.component';
import { AjouterCultureComponent } from './ajouter-culture/ajouter-culture.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { ModifierParcelleComponent } from './modifier-parcelle/modifier-parcelle.component';
import { ModifierCultureComponent } from './modifier-culture/modifier-culture.component';
import { ModifierRessourceComponent } from './modifier-ressource/modifier-ressource.component';


const routes: Routes = [
  { path: 'admin', component: DashboardComponent ,
children:[
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
]},
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
