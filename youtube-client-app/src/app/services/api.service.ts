import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataType } from '../model/Data';
import { DATA } from '../data';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  // url = '../../assets/data.json';
  // data = this.http.get<DataType>(this.url)
  // constructor(private http : HttpClient) { }

  getCard():Observable<DataType[]> {
    const cards = of(DATA);
    return cards;
  }
}
