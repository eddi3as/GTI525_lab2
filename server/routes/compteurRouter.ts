import { Router, Request, Response, NextFunction } from 'express';
import { CompteurCtrl } from '../controller/compteurCtrl'
import { Utils } from '../utils/utils';

export class CompteurRouter {
  private _router: Router;
  private _cmptCtrl: CompteurCtrl;

  get compteurCtrl() {
    return this._cmptCtrl;
  }

  get router() {
    return this._router;
  }

  /**
   * Initialiser le router
   */
  constructor() {
    this._cmptCtrl = new CompteurCtrl();
    this._router = Router();
    this.init();
  }

  public async allCompteurs(req: Request, res: Response, next: NextFunction) {
    const limitParam = req.query.limite;
    let filter = {};
    let limit = 0;
    if(limitParam)
      limit = parseInt(limitParam.toString());

    let results = await this._cmptCtrl.getCompteur(filter, limit);
    res.status(200)
    .send({
      message: 'Success from allCompteurs',
      status: res.status,
      result: results
    });
  }

  public async getCompteur(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    let filter = { ID: parseInt(id) };
    
    let results = await this._cmptCtrl.getCompteur(filter, 0);
    res.status(200)
    .send({
      message: 'Success from getCompteur',
      status: res.status,
      result: results
    });
  }

  public async getCompteurStats(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const debut = req.query.debut;
    const fin = req.query.fin;
    const limitParam = req.query.limite;
    let limit = 0;
    let filter = { borne_id: id };

    if(limitParam)
      limit = parseInt(limitParam.toString());

    Utils.setFilterDates(filter, debut, fin);

    let results = await this._cmptCtrl.getCompteurStats(filter, limit);
    res.status(200)
    .send({
      message: 'Success from getCompteur',
      status: res.status,
      result: results
    });
  }

  init() {
    this._router.get('/compteurs', this.allCompteurs.bind(this));
    this._router.get('/compteurs/:id', this.getCompteur.bind(this));
    this._router.get('/compteurs/:id/passages', this.getCompteurStats.bind(this));

    //100054585?debut=20200101&fin=20200131
  }
}

export const compteurRoutes = new CompteurRouter();
compteurRoutes.init();