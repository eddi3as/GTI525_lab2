import { Router, Request, Response, NextFunction } from 'express'
import { FontaineCtrl } from '../controller/fontaineCtrl'
import { AtelierCtrl } from '../controller/AtelierCtrl'
import Fontaine from '../models/fontaine'
import Atelier from '../models/atelier'

export class PointInteretRouter {
  private _router: Router;
  private _fntCtrl: FontaineCtrl;
  private _atelierCtrl: AtelierCtrl;

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
    this._atelierCtrl = new AtelierCtrl();
    this._router = Router();
    this.init();
  }

  public async getAllPointInteret(req: Request, res: Response, next: NextFunction) {
    let filter = {};
    let results = await this._fntCtrl.getFontaine(filter);
    res.status(200)
    .send({
      message: 'Success from getAllFontaines',
      status: res.status,
      result: JSON.parse(results)
    });
  }

  public async getPointInteret(req: Request, res: Response, next: NextFunction) {
    let filter = {};
    let results = await this._fntCtrl.getFontaine(filter);
    res.status(200)
    .send({
      message: 'Success from getAllFontaines',
      status: res.status,
      result: JSON.parse(results)
    });
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
    const id = req.params.id
    let filter = { ID: Number.parseFloat(id) }
    let results = await this._fntCtrl.getFontaine(filter)
    res.status(200)
    .send({
      message: 'Success from getFontaine',
      status: res.status,
      result: JSON.parse(results)
    });
  }

  public async ajoutFontaine(req: Request, res: Response, next: NextFunction) {
    let fontaine = new Fontaine(
        req.body.id,
        req.body.arrondissement,
        req.body.nom_parc_lieu,
        "",
        "",
        req.body.date_installation,
        req.body.remarques,
        "",
        "",
        "",
        req.body.latitude,
        req.body.longitude
    )
    await this._fntCtrl.insertFontaine(fontaine)

    res.status(200)
    .send({
      message: 'Success from ajoutFontaine',
      status: res.status
    });
  }

  public async getAllAteliers(req: Request, res: Response, next: NextFunction) {
      let filter = {};
      let results = await this._atelierCtrl.getAtelier(filter);
      res.status(200)
      .send({
          message: 'Success from getAllAteliers',
          status: res.status,
          result: JSON.parse(results)
      });
  }

  public async getAtelier(req: Request, res: Response, next: NextFunction) {
      const id = req.params.id;
      let filter = { ID: Number.parseFloat(id) }
      let results = await this._atelierCtrl.getAtelier(filter);
      res.status(200)
      .send({
          message: 'Success from getAtelier',
          status: res.status,
          result: JSON.parse(results)
      })
  }

  public async ajoutAtelier(req: Request, res: Response, next: NextFunction) {
      let atelier = new Atelier(
          req.body.id,
          req.body.arrondissement, 
          req.body.nom_lieu, 
          req.body.date_installation,
          req.body.remarques, 
          req.body.adresse
      )
      await this._atelierCtrl.insertAtelier(atelier)

      res.status(200)
      .send({
          message: 'Success from ajoutAtelier',
          status: res.status
      });
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this._router.get('/pointsdinteret', this.getAllPointInteret.bind(this));
    this._router.get('/pointsdinteret/:id', this.getPointInteret.bind(this));
    /*
    this._router.get('/fontaines', this.getAllFontaines.bind(this));
    this._router.get('/fontaines/:id', this.getFontaine.bind(this));
    this._router.post('/fontaines', this.ajoutFontaine.bind(this));
    */
  }

}

export const pointinteretRoutes = new PointInteretRouter();
pointinteretRoutes.init();