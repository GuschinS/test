import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KeyWordType } from '../model/KeyWordType';
import { KEYWORD } from '../model/KeyWord';

@Injectable({
  providedIn: 'root',
})
export class AutoService {

  getData():Observable<KeyWordType[]> {
    const words = of(KEYWORD);
    return words;
  }

}
