import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { compteurRoutes } from './routes/compteurRouter';
import { fontaineRoutes } from './routes/fontaineRouter';
import { atelierRoutes } from './routes/atelierRouter';
import { statsRoutes } from './routes/statsRouter';
import { pointinteretRoutes } from './routes/pointdinteretRouter';

const path = __dirname + '/views/';
const corsOptions = {
  origin: "http://localhost:3001"//maybe 3000 || 3001 for the API
};
// Creates and configures an ExpressJS web server.
class App {
  public expressApp: express.Application;
  private BASE_API =  '/gti525/v1';

  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.expressApp.use(logger('dev') as express.RequestHandler);
    this.expressApp.use(express.json() as express.RequestHandler);
    this.expressApp.use(express.urlencoded({ extended: true }) as express.RequestHandler);
    this.expressApp.use(express.static(path) as express.RequestHandler);
    if(this.isInProd()){
      this.expressApp.use(cors(corsOptions));
    }else{
      this.expressApp.use(cors());
    }
  }

  private isInProd(){
    return process.env.NODE_ENV.trim() == 'production';
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    router.get('/', (req, res, next) => {
        res.sendFile(path + "index.html");
    });

    this.expressApp.use('/', router);  // routage de base
    this.expressApp.use(this.BASE_API, compteurRoutes.router);
    this.expressApp.use(this.BASE_API, fontaineRoutes.router);
    this.expressApp.use(this.BASE_API, atelierRoutes.router);
    this.expressApp.use(this.BASE_API, statsRoutes.router);
    this.expressApp.use(this.BASE_API, pointinteretRoutes.router);
  }

}

export default new App().expressApp;
