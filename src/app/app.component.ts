import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  getServerStatus(api: string) {
    return this.http.get<any>(api, {
      headers: this.headers
    });
  }

  wakeupGlitch(): void {
    this.getServerStatus(environment.apiData).subscribe(data => {
      console.log("The data API is " + data.status);
    });
    this.getServerStatus(environment.apiSecure).subscribe(data => {
      console.log("The secure API is " + data.status);
    });
  }

  ngOnInit(): void {
    this.wakeupGlitch();
  }
}
