import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ParcelleComponent } from './parcelle/parcelle.component';
import { RessourceComponent } from './ressource/ressource.component';
import { CultureComponent } from './culture/culture.component';
import { ArticleComponent } from './article/article.component';
import { LectureComponent } from './lecture/lecture.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule}    from   '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AjouterRessourceComponent } from './ajouter-ressource/ajouter-ressource.component';
import { AjouterParcelleComponent } from './ajouter-parcelle/ajouter-parcelle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterCultureComponent } from './ajouter-culture/ajouter-culture.component';
import { ModifierRessourceComponent } from './modifier-ressource/modifier-ressource.component';
import { ModifierCultureComponent } from './modifier-culture/modifier-culture.component';
import { ModifierParcelleComponent } from './modifier-parcelle/modifier-parcelle.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';

import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    
    AgricultureComponent,
    ParcelleComponent,
    RessourceComponent,
    CultureComponent,
    ArticleComponent,
    LectureComponent,
    CommentaireComponent,
    DashboardComponent,
    AjouterRessourceComponent,
    AjouterParcelleComponent,
    AjouterCultureComponent,
    ModifierRessourceComponent,
    ModifierCultureComponent,
    ModifierParcelleComponent,
    AjouterArticleComponent,
    ModifierArticleComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  
})
export class AdminModule { }
