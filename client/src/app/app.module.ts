import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './content/menu/menu.component';
import { ComptageVeloComponent } from './content/comptage-velo/comptage-velo.component';
import { PointInteretComponent } from './content/point-interet/point-interet.component';
import { FooterComponent } from './footer/footer.component';
import { StatistiqueComponent } from './content/statistique/statistique.component';
import { MoreInfoComponent } from './content/more-info/more-info.component';
import { ChartComponent } from './content/chart/chart.component';
import { MapComponent } from './content/map/map.component';
import { MatRadioModule } from '@angular/material/radio';
import { AjoutPointInteretComponent } from './content/ajout-point-interet/ajout-point-interet.component';
import { FontainesABoireComponent } from './content/fontaines-a-boire/fontaines-a-boire.component';
import { ReparationVeloComponent } from './content/reparation-velo/reparation-velo.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        MenuComponent,
        ComptageVeloComponent,
        PointInteretComponent,
        FooterComponent,
        StatistiqueComponent,
        MoreInfoComponent,
        ChartComponent,
        MapComponent,
        AjoutPointInteretComponent,
        FontainesABoireComponent,
        ReparationVeloComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgChartsModule,
        BrowserAnimationsModule,
        NgxSpinnerModule,
        NgbModule,
        MatRadioModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
