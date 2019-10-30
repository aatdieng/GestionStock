import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandeComponent } from './commandes/commande/commande.component';
import { DetailsCommandeComponent } from './commandes/details-commande/details-commande.component';
import { TableComponent } from './table/table.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeService } from './Noyau/services/commande.service';

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    CommandeComponent,
    DetailsCommandeComponent,
    TableComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  entryComponents:[DetailsCommandeComponent],
  providers: [CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
