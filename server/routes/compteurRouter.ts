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
    let filter = null;
    const limit = req.params.limite;
    if(limit)
      filter.limit = limit;

    let results = await this._cmptCtrl.getCompteur(filter);
    res.status(200)
    .send({
      message: 'Success from allCompteurs',
      status: res.status,
      result: results
    });
  }

  public async getCompteur(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const debut = req.query.debut;
    const fin = req.query.fin;
    let filter = { ID: id };
    
    Utils.setFilterDates(filter, debut, fin);
    let results = await this._cmptCtrl.getCompteur(filter);
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
    const limit = req.query.limite;
    let filter = { ID: id };

    if(limit)
      filter["limit"] = limit;

    Utils.setFilterDates(filter, debut, fin);

    let results = await this._cmptCtrl.getCompteurStats(filter);
    res.status(200)
    .send({
      message: 'Success from getCompteur',
      status: res.status,
      result: results
    });
  }
  
  public ajoutCompteur(req: Request, res: Response, next: NextFunction) {

    res.status(200)
    .send({
      message: 'Success from ajoutCompteur',
      status: res.status,
    });
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this._router.get('/compteurs', this.allCompteurs.bind(this));
    this._router.get('/compteur/:id', this.getCompteur.bind(this));
    this._router.get('/compteur/:id/passages', this.getCompteurStats.bind(this));
    this._router.post('/ajout-compteur', this.ajoutCompteur.bind(this));

    //100054585?debut=20200101&fin=20200131
  }

}

export const compteurRoutes = new CompteurRouter();
compteurRoutes.init();