import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public search = new Subject<string>();

  public index = new Subject<number>();

  public id = new Subject<string>();

}
