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
import { TableService } from 'src/app/Noyau/services/table.service';
import { Table } from 'src/app/Noyau/modeles/table';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandeForm: FormGroup;
  listeDetailsCommande: DetailsCommande[];
  listeTable: Table[];

  constructor(private serviceCommande: CommandeService, private fb: FormBuilder, private dialog: MatDialog,private tableService: TableService) {}

  ngOnInit() {
    this.initialiserFormulaire();
    this.obtenirListeTable();
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

obtenirListeTable() {
  this.tableService.obtenirListeTable().then(data => this.listeTable = data as Table[]);
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
