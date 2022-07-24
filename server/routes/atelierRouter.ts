import { Router, Request, Response, NextFunction } from 'express';
import { AtelierCtrl } from '../controller/AtelierCtrl'
import Atelier from '../models/atelier'

export class AtelierRouter {
    private _router: Router;
    private _atelierCtrl: AtelierCtrl;

    get AtelierCtrl() {
        return this._atelierCtrl;
    }

    get router() {
        return this._router;
    }

    constructor() {
        this._atelierCtrl = new AtelierCtrl();
        this._router = Router();
        this.init();
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
    init() {
        this._router.get('/ateliers', this.getAllAteliers.bind(this));
        this._router.get('/ateliers/:id', this.getAtelier.bind(this));
        this._router.post('/ateliers', this.ajoutAtelier.bind(this));
    }

}

// exporter its configured Express.Router
export const atelierRoutes = new AtelierRouter();
atelierRoutes.init();