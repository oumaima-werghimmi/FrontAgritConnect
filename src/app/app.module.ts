import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgricultureComponent } from './composant/agriculture/agriculture.component';
import { ParcelleComponent } from './composant/parcelle/parcelle.component';
import { RessourceComponent } from './composant/ressource/ressource.component';
import { CultureComponent } from './composant/culture/culture.component';
import { ArticleComponent } from './composant/article/article.component';
import { LectureComponent } from './composant/lecture/lecture.component';
import { CommentaireComponent } from './composant/commentaire/commentaire.component';
import { DashboardComponent } from './composant/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule}    from   '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AjouterRessourceComponent } from './composant/ajouter-ressource/ajouter-ressource.component';
import { AjouterParcelleComponent } from './composant/ajouter-parcelle/ajouter-parcelle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AjouterCultureComponent } from './composant/ajouter-culture/ajouter-culture.component';
import { ModifierRessourceComponent } from './composant/modifier-ressource/modifier-ressource.component';
import { ModifierCultureComponent } from './composant/modifier-culture/modifier-culture.component';
import { ModifierParcelleComponent } from './composant/modifier-parcelle/modifier-parcelle.component';
import { AjouterArticleComponent } from './composant/ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './composant/modifier-article/modifier-article.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ModifierArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
