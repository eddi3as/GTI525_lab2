import { Router, Request, Response, NextFunction } from 'express';
import { StatsCtrl } from '../controller/statsCtrl'
import { DateUtils } from '../utils/DateUtils'

export class StatsRouter {
  private _router: Router;
  private _statsCtrl: StatsCtrl;  // contrôleur GRASP

  get statsCtrl() {
    return this._statsCtrl;
  }
 
  get router() {
    return this._router;
  }

  /**
   * Initialiser le router
   */
  constructor() {
    this._statsCtrl = new StatsCtrl();
    this._router = Router();
    this.init();
  }

  public allStats(req: Request, res: Response, next: NextFunction) {
    let filter = {};
    
    let results = this._statsCtrl.getStats(filter);
    res.status(200)
    .send({
      message: 'Success from allStats',
      status: res.status,
      result: results
    });
  }

  public getStats(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const debut = req.query.debut;
    const fin = req.query.fin;
    let filter = {
      ID: id
    };

    if(debut){
      filter["$gte"] = new Date(DateUtils.toISODate(debut));//debut 2020-01-01 00:00:00
    }

    if(fin){
      filter["$lte"] = new Date(DateUtils.toISODate(fin));//fin 2020-02-05 00:00:00
    }

    let results = this._statsCtrl.getStats(filter);
    res.status(200)
    .send({
      message: 'Success from getStats',
      status: res.status,
      result: results
    });
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this._router.get('/all-stats', this.allStats.bind(this));
    this._router.get('/stats/:id', this.getStats.bind(this));
  }

}

// exporter its configured Express.Router
export const statsRoutes = new StatsRouter();
statsRoutes.init();