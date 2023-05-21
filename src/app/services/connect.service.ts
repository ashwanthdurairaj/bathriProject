import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) { }

  backend(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:5000/registerOrder', data,{headers: headers}).pipe(map(res => res));
  }

  display()
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:5000/admin',{headers: headers}).pipe(map(res => res));    
  }
}
