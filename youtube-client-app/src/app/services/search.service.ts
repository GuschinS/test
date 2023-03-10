import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public search = new BehaviorSubject<string>('');

  public index = new BehaviorSubject<number>(0);

  public id = new BehaviorSubject<string>('');

}
