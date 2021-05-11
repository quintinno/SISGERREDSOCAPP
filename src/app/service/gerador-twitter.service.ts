import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class GeradorTwitterService {

  constructor( private httpClient: HttpClient) { }

  public recuperarTwitter() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.url_base_api);
  }

}
