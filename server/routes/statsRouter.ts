import { Router, Request, Response, NextFunction } from 'express';
import moment from 'moment';
import { StatsCtrl } from '../controller/statsCtrl'
import { Utils } from '../utils/utils'

export class StatsRouter {
  private _router: Router;
  private _statsCtrl: StatsCtrl;

  get statsCtrl() {
    return this._statsCtrl;
  }
 
  get router() {
    return this._router;
  }

  /**
   * Init router
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

  public async getStats(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id
    const debut = req.query.debut
    const fin = req.query.fin
    let filter = {
        borne_id: id,
        Date: {}
    }

    if(debut) 
        filter.Date["$gte"] = new Date(moment(debut.toString(), "YYYY-MM-DD").toISOString())

    if(fin)
        filter.Date["$lte"] = new Date(moment(fin.toString(), "YYYY-MM-DD").toISOString())

    let results = await this._statsCtrl.getStats(filter)
    res.status(200)
    .send({
        message: 'Success from getStats',
        status: res.status,
        result: JSON.parse(results)
    });
  }

  init() {
    this._router.get('/stats', this.allStats.bind(this));
    this._router.get('/stats/:id', this.getStats.bind(this));
  }

}

export const statsRoutes = new StatsRouter();
statsRoutes.init();