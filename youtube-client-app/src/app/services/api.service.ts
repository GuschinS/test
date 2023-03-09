import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct() {
    return this.http.get('../../assets/data.json')
      .pipe(map((res)=>{
        console.log('res: ', res);
        return res;
      }));
  }
}
