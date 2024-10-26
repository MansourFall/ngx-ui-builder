import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UiConfigurationService {
  constructor(private http: HttpClient) { }

  getGetConfigurationData(): any {
    return this.http.get('http://localhost:8000/active-template');
    // using json-server, see 'data/db.json' at the root of the project
    //command: json-server --watch db.json --port 8000
  }
}

