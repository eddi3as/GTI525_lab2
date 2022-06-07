import { collections } from '../service/database.service'

export class StatsCtrl {
    constructor() {}

    public async getStats(filter: any){
        let results = (await collections.stats.find(filter).toArray());
        return JSON.stringify(results);
    }
}