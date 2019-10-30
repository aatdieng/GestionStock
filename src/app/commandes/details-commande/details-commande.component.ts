import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DetailsCommande } from 'src/app/Noyau/modeles/details-commande';
import { DetailsCommandeService } from 'src/app/Noyau/services/details-commande.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {
  formData : DetailsCommande;
  detailsCommandeForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA)public data, public dialogRef: MatDialogRef<DetailsCommandeComponent>,
  private serviceCommande: DetailsCommandeService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  initialiserFormulaire() {
    this.detailsCommandeForm = this.fb.group({
      DetailsID: null,
      CommandeID: this.data.commandeID,
      ProduitID: ['', Validators.required],
      NomProduit:'',
      Quantite: [0, Validators.required],
      Prix: [0, Validators.required],
      Total:0
    });
  }
  viderChamps() {
    this.detailsCommandeForm.reset();
  }


}
