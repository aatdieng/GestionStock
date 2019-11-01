import {
  Component,
  OnInit
} from '@angular/core';
import {
  CommandeService
} from 'src/app/Noyau/services/commande.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  DetailsCommande
} from 'src/app/Noyau/modeles/details-commande';
import {
  MatDialog, MatDialogConfig
} from '@angular/material/dialog';
import {
  DetailsCommandeComponent
} from '../details-commande/details-commande.component';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandeForm: FormGroup;
  listeDetailsCommande: DetailsCommande[];

  constructor(private serviceCommande: CommandeService, private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    this.initialiserFormulaire();
  }

  initialiserFormulaire() {
    this.commandeForm = this.fb.group({
      CommandeID: 0,
      CommandeNo: [Math.floor(100000 + Math.random() * 900000).toString(), Validators.required],
      TableID: ['', Validators.required],
      PMethode: ['', Validators.required],
      GTotal: ['0']
    });
    this.listeDetailsCommande = this.serviceCommande.detailsCommande;
  }

  viderChamps() {
    this.commandeForm.reset();
  }

  AjouterOuModifierProduit(produitIndex, commandeID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {produitIndex, commandeID};
    this.dialog.open(DetailsCommandeComponent, dialogConfig);
  }
}
