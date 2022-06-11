import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { compteurRoutes } from './routes/compteurRouter';
import { fontaineRoutes } from './routes/fontaineRouter';
import { statsRoutes } from './routes/statsRouter';

const path = __dirname + '/views/';
const corsOptions = {
  origin: "http://localhost:3001"//maybe 3000 || 3001 for the API
};
// Creates and configures an ExpressJS web server.
class App {
  public expressApp: express.Application;
  private BASE_API = '/gti525/v1';

  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.expressApp.use(express.static(path) as express.RequestHandler);
    this.expressApp.use(cors(corsOptions));
  }

  private middleware(): void {
    this.expressApp.use(logger('dev') as express.RequestHandler);
    this.expressApp.use(express.json() as express.RequestHandler);
    this.expressApp.use(express.urlencoded({ extended: true }) as express.RequestHandler);
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
    this.expressApp.use(this.BASE_API, statsRoutes.router);
  }

}

export default new App().expressApp;
