import { Router, Request, Response, NextFunction } from 'express';
import { FontaineCtrl } from '../controller/fontaineCtrl'

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

  public async allFontaines(req: Request, res: Response, next: NextFunction) {
    let filter = {};
    let results = await this._fntCtrl.getFontaine(filter);
    res.status(200)
    .send({
      message: 'Success from allFontaines',
      status: res.status,
      result: results
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
      result: results
    });
  }

  public ajoutFontaine(req: Request, res: Response, next: NextFunction) {

    res.status(200)
    .send({
      message: 'Success from ajoutFontaine',
      status: res.status,
    });
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this._router.get('/fontaines', this.allFontaines.bind(this));
    this._router.get('/fontaine/:id', this.getFontaine.bind(this));
    this._router.post('/ajout-fontaine', this.ajoutFontaine.bind(this));
  }

}

// exporter its configured Express.Router
export const fontaineRoutes = new FontaineRouter();
fontaineRoutes.init();