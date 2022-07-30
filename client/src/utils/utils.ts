import { Compteur } from "src/app/models/compteur";
import { Fontaine } from "src/app/models/fontaine";
import { PointInteret } from "src/app/models/pointinteret";

export function fontainesToJSON(lines: string[]): Fontaine[]{
    let objs: Fontaine[] = [];
    lines.forEach(i => {
      let arr = i.split(",");
      let font: Fontaine = {
        id: Number(arr[0]),
        neighbourhood: arr[1],
        parc_name: arr[2],
        near_site: arr[3],
        intersection: arr[4],
        state: arr[5],
        install_date: arr[6],
        comment: arr[7],
        accuracy: arr[8],
        x: Number(arr[9]),
        y: Number(arr[10]),
        longitude: Number(arr[11]),
        latitude: Number(arr[12])
      };
      objs.push(font);
    });
    return objs;
}

export function compteursToJSON(lines: string[]): Compteur[]{
    let objs: Compteur[] = [];
    lines.forEach(i => {
      let arr = i.split(",");
      let compt: Compteur = {
        id: Number(arr[0]),
        old_id: Number(arr[1]),
        name: arr[2],
        status: arr[3],
        latitude: Number(arr[4]),
        longitude: Number(arr[5]),
        year_build: arr[6].substring(0, 4)
      };
      objs.push(compt);
    });
    return objs;
}

export function compteursToModel(lines: any[]): Compteur[]{
    let objs: Compteur[] = [];
    lines.forEach(obj => {
      let compt: Compteur = {
        id: obj.ID,
        old_id: obj.Ancien_ID,
        name: obj.Nom,
        status: obj.Statut,
        latitude: obj.Latitude,
        longitude: obj.Longitude,
        year_build: obj.Annee_implante
      };
      objs.push(compt);
    });
    return objs;
}

export function fontainesToModel(lines: any[]): Fontaine[]{
    let objs: Fontaine[] = [];
    lines.forEach(obj => {
      let fontaine: Fontaine = {
        id: obj.ID,
        neighbourhood: obj.Arrondissement,
        parc_name: obj.Nom_parc_lieu,
        near_site: obj.Proximité_jeux_repère,
        intersection: obj.Intersection,
        state: obj.Etat,
        install_date: obj.Date_installation,
        comment: obj.Remarque,
        accuracy: obj.Precision_localisation,
        x: obj.X,
        y: obj.Y,
        longitude: obj.Longitude,
        latitude: obj.Latitude
      };
      objs.push(fontaine);
    });
    return objs;
}

export function pointToModel(lines: any[]): PointInteret[]{
    let objs: PointInteret[] = [];
    lines.forEach(obj => {
      let etat = obj.Etat === undefined ? '' : obj.Etat;
      let near = obj.Proximité_jeux_repère === undefined ? obj.Proximite_jeux_repere : obj.Proximité_jeux_repère;
      let pt: PointInteret = {
        id: obj.ID,
        neighbourhood: obj.Arrondissement,
        parc_name: obj.Nom_parc_lieu,
        near_site: near,
        intersection: obj.Intersection,
        state: etat,
        install_date: obj.Date_installation,
        comment: obj.Remarque,
        accuracy: obj.Precision_localisation,
        x: obj.X,
        y: obj.Y,
        longitude: obj.Longitude,
        latitude: obj.Latitude,
        type: obj.Type
      };
      objs.push(pt);
    });
    return objs;
}