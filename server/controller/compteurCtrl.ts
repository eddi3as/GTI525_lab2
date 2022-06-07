import { collections } from '../service/database.service'
import Compteur from '../models/compteur';

export class CompteurCtrl {

    private compteurs: Compteur[];

    constructor() {
        this.compteurs = [];
    }

    public async getCompteur(filter: any){
        if(this.compteurs.length > 0)
            return JSON.stringify(this.compteurs);

        this.compteurs = (await collections.compteurs.find<Compteur>(filter).toArray()) as Compteur[];
        return JSON.stringify(this.compteurs);
    }
}