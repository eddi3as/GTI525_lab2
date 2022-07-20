import { collections } from '../service/database.service'
import Atelier from '../models/atelier';

export class AtelierCtrl {

    public async getAtelier(filter: any) {
        let ateliers = (await collections.ateliers.find<Atelier>(filter).toArray()) as Atelier[];
        return JSON.stringify(ateliers);
    }

    public async insertAtelier(fontaine: Atelier) {
        await collections.ateliers.insertOne(fontaine)
    }
}