import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UiConfigurationService {
  constructor(private http: HttpClient) { }

  getGetConfigurationData(): any {
    return this.http.get('http://localhost:8000/active-template');
  }
}

