import { collections } from '../service/database.service'
import Atelier from '../models/atelier';
import Fontaine from '../models/fontaine';
import { Utils } from '../utils/utils';

export class PointInteretCtrl {

    public async getPointInteret(filter: any) {
        if(filter.type && filter.type === Utils.atelier){
            return this.getAtelier(filter);
        }
        else if(filter.type){
            return this.getFontaine(filter);
        }else{
            return this.getAll(filter);
        }
    }

    private async getAtelier(filter: any) {
        let ateliers: Atelier[];
        if(filter.limit){
            ateliers = (await collections.ateliers?.find<Atelier>(filter).limit(filter.limit).toArray()) as Atelier[];
        }
        else{
            ateliers = (await collections.ateliers?.find<Atelier>(filter).toArray()) as Atelier[];
        }
        return JSON.stringify(ateliers);
    }

    public async getFontaine(filter: any) {
        let fontaines: Fontaine[];
        if(filter.limit){
            fontaines = (await collections.fontaines?.find<Fontaine>(filter).limit(filter.limit).toArray()) as Fontaine[];
        }
        else{
            fontaines = (await collections.fontaines?.find<Fontaine>(filter).toArray()) as Fontaine[];
        }
        return JSON.stringify(fontaines);
    }

    private async getAll(filter: any) {
        let ateliers: Atelier[] = [];
        /* TODO revoir pointinteret
        if(filter.limit){
            ateliers = (await collections.ateliers?.find<Atelier>(filter).limit(filter.limit).toArray()) as Atelier[];
        }
        else{
            ateliers = (await collections.ateliers?.find<Atelier>(filter).toArray()) as Atelier[];
        }
        */
        return JSON.stringify(ateliers);
    }

    public async insertAtelier(fontaine: Atelier) {
        await collections.ateliers?.insertOne(fontaine)
    }

    public async insertFontaine(fontaine: Fontaine) {
        await collections.fontaines?.insertOne(fontaine)
    }
}