import { collections } from '../service/database.service'
import Fontaine from '../models/fontaine';

export class FontaineCtrl {

    private fontaines: Fontaine[];

    constructor() {
        this.fontaines = [];
    }

    public async getFontaine(filter: any){
        if(this.fontaines.length > 0)
            return JSON.stringify(this.fontaines);

        this.fontaines = (await collections.fontaines.find<Fontaine>(filter).toArray()) as Fontaine[];
        return JSON.stringify(this.fontaines);
    }

    public async insertFontaine(fontaine: Fontaine) {
        await collections.fontaines.insertOne(fontaine)
    }
}