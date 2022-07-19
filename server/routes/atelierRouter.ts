import { Router, Request, Response, NextFunction } from 'express';
import { AtelierCtrl } from '../controller/AtelierCtrl'
import Atelier from '../models/atelier';
import { v4 as uuidv4 } from 'uuid'

export class AtelierRouter {
  private _router: Router;
  private _fntCtrl: AtelierCtrl;

  get AtelierCtrl() {
    return this._fntCtrl;
  }

  get router() {
    return this._router;
  }

  /**
   * Initialiser le router
   */
  constructor() {
    this._fntCtrl = new AtelierCtrl();
    this._router = Router();
    this.init();
  }

  public async getAllAteliers(req: Request, res: Response, next: NextFunction) {
    let filter = {};
    let results = await this._fntCtrl.getAtelier(filter);
    res.status(200)
    .send({
      message: 'Success from allateliers',
      status: res.status,
      result: JSON.parse(results)
    });
  }

  public async getAtelier(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    let filter = { ID: id };
    let results = await this._fntCtrl.getAtelier(filter);
    res.status(200)
    .send({
      message: 'Success from getAtelier',
      status: res.status,
      result: JSON.parse(results)
    });
  }

  public async ajoutAtelier(req: Request, res: Response, next: NextFunction) {
    let id = uuidv4()
    let atelier = new Atelier(
        req.body.arrondissement, 
        req.body.nom_lieu, 
        req.body.date_installation,
        req.body.remarques, 
        req.body.adresse, 
        id
    )
    await this._fntCtrl.insertAtelier(atelier)

    res.status(200)
    .send({
      message: 'Success from ajoutAtelier',
      status: res.status,
      atelier_id: id
    });
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this._router.get('/ateliers', this.getAllAteliers.bind(this));
    this._router.get('/ateliers/:id', this.getAtelier.bind(this));
    this._router.post('/ateliers', this.ajoutAtelier.bind(this));
  }

}

// exporter its configured Express.Router
export const atelierRoutes = new AtelierRouter();
atelierRoutes.init();