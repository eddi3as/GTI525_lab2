import { Router, Request, Response, NextFunction } from 'express';
import { FontaineCtrl } from '../controller/fontaineCtrl'
import Fontaine from '../models/fontaine';
import { v4 as uuidv4 } from 'uuid'

export class FontaineRouter {
  private _router: Router;
  private _fntCtrl: FontaineCtrl;

  get fontaineCtrl() {
    return this._fntCtrl;
  }

  get router() {
    return this._router;
  }

  /**
   * Initialiser le router
   */
  constructor() {
    this._fntCtrl = new FontaineCtrl();
    this._router = Router();
    this.init();
  }

  public async getAllFontaines(req: Request, res: Response, next: NextFunction) {
    let filter = {};
    let results = await this._fntCtrl.getFontaine(filter);
    res.status(200)
    .send({
      message: 'Success from getAllFontaines',
      status: res.status,
      result: JSON.parse(results)
    });
  }

  public async getFontaine(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    let filter = { ID: id };
    let results = await this._fntCtrl.getFontaine(filter);
    res.status(200)
    .send({
      message: 'Success from getFontaine',
      status: res.status,
      result: JSON.parse(results)
    });
  }

  public async ajoutFontaine(req: Request, res: Response, next: NextFunction) {
    let id = uuidv4()
    let fontaine = new Fontaine(
        req.body.arrondissement,
        req.body.nom_lieu,
        req.body.date_installation,
        req.body.remarques,
        req.body.latitude,
        req.body.longitude
    )
    await this._fntCtrl.insertFontaine(fontaine)

    res.status(200)
    .send({
      message: 'Success from ajoutFontaine',
      status: res.status,
      fontaine_id: id
    });
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this._router.get('/fontaines', this.getAllFontaines.bind(this));
    this._router.get('/fontaines/:id', this.getFontaine.bind(this));
    this._router.post('/fontaines', this.ajoutFontaine.bind(this));
  }

}

// exporter its configured Express.Router
export const fontaineRoutes = new FontaineRouter();
fontaineRoutes.init();