import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './content/menu/menu.component';
import { ComptageVeloComponent } from './content/comptage-velo/comptage-velo.component';
import { PointInteretComponent } from './content/point-interet/point-interet.component';
import { FooterComponent } from './footer/footer.component';
import { StatistiqueComponent } from './content/statistique/statistique.component';
import { MoreInfoComponent } from './content/more-info/more-info.component';

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
        MoreInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
