import { Injectable } from '@angular/core';
import { Table } from '../modeles/table';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  formData: Table;
  constructor(private http: HttpClient) {}
  //Recuperer la liste des tables 
  obtenirListeTable() {
    return this.http.get(environment.apiURL + 'Tables').toPromise();
  }
}
