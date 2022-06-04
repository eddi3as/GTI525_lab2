import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptageVeloComponent } from './content/comptage-velo/comptage-velo.component';
import { PointInteretComponent } from './content/point-interet/point-interet.component';

const routes: Routes = [
    { path: '', redirectTo: '/comptage-velo', pathMatch: 'full' },
    { path: 'comptage-velo', component: ComptageVeloComponent },
    { path: 'points-interets', component: PointInteretComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
