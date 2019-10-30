import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandeComponent } from './commandes/commande/commande.component';


const routes: Routes = [
 {path: '', redirectTo: 'Commande', pathMatch: 'full'},
  {path: 'Commandes', component: CommandesComponent},
  {path: 'Commande', children: [
    {path: '', component: CommandeComponent},
    {path: 'modifier/:id', component: CommandeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
