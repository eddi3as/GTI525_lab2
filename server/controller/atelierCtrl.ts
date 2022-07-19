import { collections } from '../service/database.service'
import Atelier from '../models/atelier';

export class AtelierCtrl {

    private ateliers: Atelier[];

    constructor() {
        this.ateliers = [];
    }

    public async getAtelier(filter: any){
        if(this.ateliers.length > 0)
            return JSON.stringify(this.ateliers);

        this.ateliers = (await collections.ateliers.find<Atelier>(filter).toArray()) as Atelier[];
        return JSON.stringify(this.ateliers);
    }

    public async insertAtelier(fontaine: Atelier) {
        await collections.ateliers.insertOne(fontaine)
    }
}