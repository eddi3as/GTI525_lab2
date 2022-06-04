import { Compteur } from "src/app/models/compteur";
import { Fontaine } from "src/app/models/fontaine";

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
      //100041114,,Eco-Display Parc Stanley,Actif,45.55759296561201,-73.67322198070093,2018
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