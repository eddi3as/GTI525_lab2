import express from 'express';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    /*
    Connection with Angular
    For later 
    this.expressApp.set('view engine', 'pug');
    this.expressApp.use(express.static(__dirname + '/public') as express.RequestHandler); // https://expressjs.com/en/starter/static-files.html
    */
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(express.json() as express.RequestHandler);
    this.expressApp.use(express.urlencoded({ extended: false }) as express.RequestHandler);
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    // Home page
    router.get('/', (req, res, next) => {
        //TODO load CSV
        //TODO render Home
        res.send("ok!");
    });

    this.expressApp.use('/', router);  // router BE
  }

}

export default new App().expressApp;