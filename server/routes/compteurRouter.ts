import { Router, Request, Response, NextFunction } from 'express';
import { CompteurCtrl } from '../controller/compteurCtrl'

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
    let filter = {};
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
    let results = await this._cmptCtrl.getCompteur(filter);
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
    this._router.get('/compteurs', this.allCompteurs.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this._router.get('/compteur/:id', this.getCompteur.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this._router.post('/ajout-compteur', this.ajoutCompteur.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342

    //100054585?debut=20200101&fin=20200131
  }

}

// exporter its configured Express.Router
export const compteurRoutes = new CompteurRouter();
compteurRoutes.init();