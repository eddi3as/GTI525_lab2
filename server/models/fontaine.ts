import { ObjectId } from "mongodb";

export default class Fontaine {
    constructor(
        public arrondissement: string, 
        public nom_lieu: string, 
        public date_installation: string,
        public remarques: string, 
        public longitude: string, 
        public latitude: string, 
        public _id?: ObjectId) {}
}