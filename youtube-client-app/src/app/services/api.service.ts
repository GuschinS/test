import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CardInfo } from '../model/Card-info';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private http : HttpClient) { }

  getCard():Observable<CardInfo> {
    return this.http.get<CardInfo>('../../assets/data.json')
      .pipe(map((result)=>{
        console.log('res: ', result);
        return result;
      }));
  }
}
