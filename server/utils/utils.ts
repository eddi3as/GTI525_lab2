import { collections } from '../service/database.service'
import fs from 'fs'

export class Utils{
    private static imported = "stats-imported";
    private static months = ["January", "February", "March", "April", "May", "June",
                              "July", "August", "September", "October", "November", "December"];
 
  public static async importCSV(){
    let imported = await collections.stats.find({borne_id: this.imported }).toArray();
    if(imported.length == 0){
      this.runscript();
    }
  }

  private static runscript() {
    for (let index = 2019; index < 2022; index++) {
      let array = this.getStats(index.toString());
      collections.stats.insertMany(array);
    }
    collections.stats.insertOne({borne_id: this.imported, count: -1, Date: new Date() });
  }

  private static getStats(csvDate: string) {
    let fileStr = "./assets/counter_stats_" + csvDate + ".csv";
    let data = fs.readFileSync(fileStr, "utf8");
    let db_data = this.parseData(data);
    return db_data;
  }

  private static parseData(data: string) {
    let db_data = [];
    let allData = data.split("\n");
    let ids = allData[0].split(",");
    let rows = allData.splice(1);
    rows.forEach(row =>{
      let line = row.split(",");
      let date = line[0];
      const iso_date = this.toISODate(date);
      for (let i = 1; i < line.length; i++) {
        const link_id = ids[i];
        const counter = line[i];
        db_data.push({Date: new Date(iso_date), borne_id: link_id, count: counter})
      }
    });
    return db_data;
  }
  
  public static toISODate(csv_date: string){
    let date_arr = csv_date.split(" ");
    let date_utc = date_arr[0].split("-");
    let month = this. months[Number(date_utc[1]) - 1];
    let final_date = date_utc[0] + " " + month + " " + date_utc[2] + " " + date_arr[1] + " UTC";
    const event = new Date(final_date);
    let date_iso = event.toISOString();
    return date_iso;
  }
}