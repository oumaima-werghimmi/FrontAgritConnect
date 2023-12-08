import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agriculteur } from 'src/app/models/agriculteur';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  argiculteurForm !: FormGroup;
  lesagriculteur!: Agriculteur[];
  constructor(private fb: FormBuilder, private inscription:InscriptionService, private router:Router) {
    this.argiculteurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.required],
      pwd: ['', Validators.required],
      
    });
  }

  login(){
    const { mail, pwd } = this.argiculteurForm.value;
    const [user] = this.lesagriculteur.filter((user) => user.mail === mail && user.pwd === pwd) 
    if (user) {
      this.inscription.user = user; 
      
        this.router.navigate(['admin'])
      } 
    
    
    this.argiculteurForm.reset();
  }

}
