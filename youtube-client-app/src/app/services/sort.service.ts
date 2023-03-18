import { Injectable } from '@angular/core';
import { DataType } from '../model/Data';

@Injectable({
  providedIn: 'root',
})
export class SortService {

  protected result?: DataType[];

  protected currentSort = 'asc';

  sendResult(result: DataType[]) {
    this.result = result;
  }

  getCards() {
    return this.result;
  }

  sortCardsByViewed() {
    if (this.result) {
      if (this.currentSort === 'asc') {
        this.result.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
        this.currentSort = 'desc';
      } else {
        this.result.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
        this.currentSort = 'asc';
      }
    }

  }

  sortCardsByDate() {
    if (this.result) {
      if (this.currentSort === 'asc') {
        this.result.sort((a, b) => new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime());
        this.currentSort = 'desc';
      } else {
        this.result.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
        this.currentSort = 'asc';
      }
    }

  }

}
