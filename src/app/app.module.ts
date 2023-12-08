import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { AboutUsComponent } from './composant/about-us/about-us.component';
import { FooterComponent } from './composant/footer/footer.component';
import { NavbarComponent } from './composant/navbar/navbar.component';
import { ConnexionComponent } from './composant/connexion/connexion.component';
import { InscriptionComponent } from './composant/inscription/inscription.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
    AccueilComponent,
    AboutUsComponent,
    FooterComponent,
    NavbarComponent,
    ConnexionComponent,
    InscriptionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    //AdminModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
