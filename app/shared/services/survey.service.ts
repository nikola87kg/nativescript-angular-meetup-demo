import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SurveyService {

  apiURL: string = "http://realtime-apps.quantox.tech/api/";

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

  getSurveys(surveyType) {
    return this.http.post(
        this.apiURL + "surveys/stats/",
        { field: surveyType },
        { headers: this.getCommonHeaders() }
    )
    .map((response) => response.json())
    .catch (this.handleErrors);
  }

  submitSurveys(answers) {
    return this.http.post(
        this.apiURL + "surveys/",
        answers,
        { headers: this.getCommonHeaders() }
    )
    .map((response) => response.json())
    .catch (this.handleErrors);
  }
}
