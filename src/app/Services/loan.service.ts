import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { loan } from "../Classes/loan_class";
@Injectable({
  providedIn: "root"
})
export class LoanService {
  private url = "http://localhost:3000/loan/";
  constructor(private _http: HttpClient) {}
  getLoan() {
    return this._http.get(this.url);
  }
  addLoanNotification(item:loan) {
    const body = JSON.stringify(item);
    const head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url, body, { headers: head1 });
  }
}
