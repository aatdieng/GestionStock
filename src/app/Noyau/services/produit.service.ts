import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Produit
} from '../modeles/produit';
import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  formData: Produit;
  constructor(private http: HttpClient) {}
  //Recuperer la liste des produits 
  obtenirListeProduit() {
    return this.http.get(environment.apiURL + 'Produits').toPromise();
  }

}
