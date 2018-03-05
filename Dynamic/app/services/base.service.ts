import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BaseService {

    constructor(public http: Http) {
        console.log("Sevice work");
    }

    getDataAll(id: string) {
        return this.http.post("home/getChart", { val: id })
            .map(res => res.json());

    }
}