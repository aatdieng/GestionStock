import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material';
import {
  DetailsCommande
} from 'src/app/Noyau/modeles/details-commande';
import {
  DetailsCommandeService
} from 'src/app/Noyau/services/details-commande.service';
import {
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';
import {
  ProduitService
} from 'src/app/Noyau/services/produit.service';
import {
  Produit
} from 'src/app/Noyau/modeles/produit';
import { CommandeService } from 'src/app/Noyau/services/commande.service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {
  formData: DetailsCommande;
  listeProduit: Produit[];
  detailsCommandeForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef < DetailsCommandeComponent > ,
    private serviceCommande: DetailsCommandeService, private fb: FormBuilder, private serviceProduit: ProduitService,
    private commandeservice: CommandeService) {}

  ngOnInit() {
    this.initialiserFormulaire();
    this.obtenirListeProduits();
  }

  obtenirListeProduits() {
    this.serviceProduit.obtenirListeProduit().then(data => this.listeProduit = data as Produit[]);
  }

  initialiserFormulaire() {
    this.detailsCommandeForm = this.fb.group({
      DetailsID: null,
      CommandeID: this.data.commandeID,
      ProduitID: [0, Validators.required],
      NomProduit: '',
      Quantite: [1, Validators.required],
      Prix: [0, Validators.required],
      Total: 0
    });
  }
  ajouterDetailsCommande() {
  if (this.detailsCommandeForm.valid) {
    this.detailsCommandeForm.markAsPristine();
    const detailsCommande: DetailsCommande = this.detailsCommandeForm.getRawValue() as DetailsCommande;
    this.commandeservice.detailsCommande.push(detailsCommande);
    this.dialogRef.close();
  }

  }
  viderChamps() {
    this.detailsCommandeForm.reset();
  }
  mettreAJoutPrix(indexProduit){
    if (indexProduit.selectedIndex === 0) {
      this.detailsCommandeForm.get('Prix').setValue('0');
      this.detailsCommandeForm.get('NomProduit').setValue('');
      this.detailsCommandeForm.get('Prix').updateValueAndValidity();
      this.detailsCommandeForm.get('NomProduit').updateValueAndValidity();
      
    } else {
      this.detailsCommandeForm.get('Prix').setValue(this.listeProduit[indexProduit.selectedIndex-1].Prix);
      this.detailsCommandeForm.get('NomProduit').setValue(this.listeProduit[indexProduit.selectedIndex-1].ProduitName);
      this.detailsCommandeForm.get('Prix').updateValueAndValidity();
      this.detailsCommandeForm.get('NomProduit').updateValueAndValidity();
    }
    this.mettreAJourTotal();
  }

  mettreAJourTotal(){
    const total = this.detailsCommandeForm.get('Prix').value * this.detailsCommandeForm.get('Quantite').value;
    this.detailsCommandeForm.get('Total').setValue(total);
    this.detailsCommandeForm.get('Total').updateValueAndValidity();
  }

}
