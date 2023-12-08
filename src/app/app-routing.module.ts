import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { AboutUsComponent } from './composant/about-us/about-us.component';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { ConnexionComponent } from './composant/connexion/connexion.component';
import { InscriptionComponent } from './composant/inscription/inscription.component';
import { ParcelleComponent } from './admin/parcelle/parcelle.component';
import { AgricultureComponent } from './admin/agriculture/agriculture.component';
import { RessourceComponent } from './admin/ressource/ressource.component';
import { CultureComponent } from './admin/culture/culture.component';
import { ArticleComponent } from './admin/article/article.component';
import { LectureComponent } from './admin/lecture/lecture.component';
import { CommentaireComponent } from './admin/commentaire/commentaire.component';
import { AjouterParcelleComponent } from './admin/ajouter-parcelle/ajouter-parcelle.component';
import { AjouterRessourceComponent } from './admin/ajouter-ressource/ajouter-ressource.component';
import { AjouterCultureComponent } from './admin/ajouter-culture/ajouter-culture.component';
import { ModifierRessourceComponent } from './admin/modifier-ressource/modifier-ressource.component';
import { ModifierCultureComponent } from './admin/modifier-culture/modifier-culture.component';
import { ModifierParcelleComponent } from './admin/modifier-parcelle/modifier-parcelle.component';
import { ModifierArticleComponent } from './admin/modifier-article/modifier-article.component';
import { AjouterArticleComponent } from './admin/ajouter-article/ajouter-article.component';

const routes: Routes = [
   { path: 'admin', component: DashboardComponent },
  // { path: 'gestion-agriculture', component: AgricultureComponent },
  { path: 'gestion-parcelle', component: ParcelleComponent },
  { path: 'gestion-agriculture', component: AgricultureComponent },
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
  { path: 'accueil', component:AccueilComponent },
  { path: 'aboutUs', component:AboutUsComponent },
  //{ path: 'Nos-Articles', component:NosarticlesComponent },
  { path: 'login', component:ConnexionComponent },
  { path: 'inscription', component:InscriptionComponent },

  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
