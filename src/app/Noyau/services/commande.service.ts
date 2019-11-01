import { Injectable } from '@angular/core';
import { Commande } from '../modeles/commande';
import { DetailsCommande } from '../modeles/details-commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  formData: Commande;
  detailsCommande: DetailsCommande[] = [];
  constructor() { }
}
