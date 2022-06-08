export class DateUtils{
    private static months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    public static toISODate(csv_date: string){//TODO csv parsing dates
        /* value needs to be 2019-01-01 00:00:00
        //for search
        const event = new Date('22 April 2020 12:22 UTC')
        let tmp_f = new Date('01 January 2019 00:00:00 UTC').toISOString();
        let tmp_e = new Date('19 February 2019 00:00:00 UTC').toISOString();

        let results = await collections.stats.find({Date: 
            {$gte: new Date(tmp_f),
                $lte: new Date(tmp_e)}}).toArray();
        
        //for csv parsing    
        let tmp = csv_date.split(" ");
        let date_utc = tmp[0].split("-");
        let month = months[Number(date_utc[1]) - 1];
        let final_date = date_utc[0] + " "+month+" "+date_utc[2]+" "+ tmp[1]+" UTC";
        const event = new Date(final_date);

        let date_iso = event.toISOString();
        */
        //for csv parsing    
        let date_arr = csv_date.split(" ");
        let date_utc = date_arr[0].split("-");
        let month = this. months[Number(date_utc[1]) - 1];
        let final_date = date_utc[0] + " "+month+" "+date_utc[2]+" "+ date_arr[1]+" UTC";
        const event = new Date(final_date);
        let date_iso = event.toISOString();
       return date_iso;
    }
    
    /*
  private runScript(){
    fs.readFile("./assets/stats_test.csv", "utf8", (err, data)=>{
      let _id = "";
      let converts = ["", "January", "February", "March", "April"]
      let rows = data.split("\n");
      let line = rows[0].split(",");
      _id = line[1];
      let rows_ = rows.splice(1);
      let _data = [];
      rows_.forEach(el => {
        let line = el.split(",");
        let date = line[0];
        let counter = line[1];
        let tmp = date.split(" ");
        let date_utc = tmp[0].split("-");
        let month = converts[Number(date_utc[1])];
        let final_date = date_utc[0] + " "+month+" "+date_utc[2]+" "+ tmp[1]+" UTC";
        const event = new Date(final_date);
        //new Date(year, month, day, hours, minutes, seconds, milliseconds)
        
        const event = new Date('22 April 2020 12:22 UTC')
        console.log(event.toString());
        console.log(event.toISOString());
     
        let test = event.toISOString();
        _data.push({Date: new Date(test), borne_id: _id, count: counter});
      });
      collections.stats.insertMany(_data);
    });
  }   */
}