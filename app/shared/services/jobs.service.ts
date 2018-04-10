import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class JobsService {

  apiURL: string = "http:/192.168.88.66/api/";

  constructor(private http: Http) {}

  getCommonHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));

    return Observable.throw(error);
  }

  getJobs() {
    return this.http.get(this.apiURL + "jobs/", { headers: this.getCommonHeaders() })
    .map((response) => response.json())
    .catch (this.handleErrors);
  }
}
