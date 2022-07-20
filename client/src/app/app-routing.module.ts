import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './content/chart/chart.component';
import { MapComponent } from './content/map/map.component';
import { ComptageVeloComponent } from './content/comptage-velo/comptage-velo.component';
import { PointInteretComponent } from './content/point-interet/point-interet.component';
import { FontainesABoireComponent } from './content/fontaines-a-boire/fontaines-a-boire.component';
import { ReparationVeloComponent } from './content/reparation-velo/reparation-velo.component'
import { AjoutPointInteretComponent } from './content/ajout-point-interet/ajout-point-interet.component';

const routes: Routes = [
    { path: '', redirectTo: '/comptage-velo', pathMatch: 'full' },
    { path: 'comptage-velo', component: ComptageVeloComponent },
    { path: 'map', component: MapComponent },
    { path: 'points-interets', component: PointInteretComponent },
    { path: 'fontaines-a-boire', component: FontainesABoireComponent },
    { path: 'reparation-velo', component: ReparationVeloComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'ajout-point-interet', component: AjoutPointInteretComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
