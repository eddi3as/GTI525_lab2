import express from 'express';
import logger from 'morgan';
import fs from 'fs'
//import cors from 'cors';

import { compteurRoutes } from './routes/compteurRouter';
import { fontaineRoutes } from './routes/fontaineRouter';
import { statsRoutes } from './routes/statsRouter';

// Creates and configures an ExpressJS web server.
class App {
  public expressApp: express.Application;
  private BASE_API = '/gti525/v1';

  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
   // this.runScript();//script to modify dates in stats for date search
  }

  private runScript(){
    fs.readFile("./assets/counter_stats_2019.csv", "utf8", (err, data)=>{
      let rows = data.split("\n");
      let test = rows;
      rows.forEach(el => {
        let line = el.split(",");
        let date = line[0];
        //new Date(year, month, day, hours, minutes, seconds, milliseconds)
        /*
        const event = new Date('22 April 2020 12:22 UTC')
        console.log(event.toString());
        console.log(event.toISOString());
        */
        let test = new Date(2020, 1, 1, 20, 0, 0, 0).toISOString();
      });
    });
  }

  private middleware(): void {
    this.expressApp.use(logger('dev') as express.RequestHandler);
    //this.expressApp.use(cors);
    this.expressApp.use(express.json() as express.RequestHandler);
    this.expressApp.use(express.urlencoded({ extended: false }) as express.RequestHandler);
    //
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.send("GTI525 server running!");
    });

    this.expressApp.use('/', router);  // routage de base
    this.expressApp.use(this.BASE_API, compteurRoutes.router);
    this.expressApp.use(this.BASE_API, fontaineRoutes.router);
    this.expressApp.use(this.BASE_API, statsRoutes.router);
  }

}

export default new App().expressApp;
