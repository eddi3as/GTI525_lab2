import { HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

export const authHeader = () => {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + environment.apiKey);
    header.set('Content-Type', 'application/json');
    const headers = { headers: header };
    return headers;
};