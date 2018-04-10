import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class JobsService {

  apiURL:string = "http:/192.168.88.66/api/"

  constructor(private http: Http) {}

  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  getJobs() {
    return this.http.get(this.apiURL + "jobs/", { headers: this.getCommonHeaders() } 
    ).map(response => response.json())
    .catch (this.handleErrors);
  }
}