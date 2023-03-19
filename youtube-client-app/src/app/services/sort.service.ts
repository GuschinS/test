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

  findKeyPath<T>(obj: T, targetKey: string, currentPath: string[] = []):string[] | null {
    for (const key in obj) {
      if (key === targetKey) {
        return [...currentPath, key];
      } else if (typeof obj[key] === 'object') {
        const enterWord = this.findKeyPath(obj[key] as DataType, targetKey, [...currentPath, key]);
        if (enterWord) {
          console.log('enterWord: ', enterWord);
          return enterWord;
        }
      }
    }
    return null;
  }

  sortCardsByEnterWord(enterWord: string[]) {
    if (this.result && enterWord[0] === 'statistics') {
      this.sortNumber();
    } else {
      this.sortString();
    }
  }

  sortNumber() {
    if (this.result) {
      if (this.currentSort === 'asc') {
        this.result.sort((a, b) => Number(a.statistics.likeCount) - Number(b.statistics.likeCount));
        this.currentSort = 'desc';
      } else {
        this.result.sort((a, b) => Number(b.statistics.likeCount) - Number(a.statistics.likeCount));
        this.currentSort = 'asc';
      }
    }
  }

  sortString() {
    if (this.result) {
      if (this.currentSort === 'asc') {
        this.result.sort((a, b) => {
          if (a.snippet.channelId < b.snippet.channelId) {
            return -1;
          } else if (a.snippet.channelId > b.snippet.channelId) {
            return 1;
          } else {
            return 0;
          }
        });
        this.currentSort = 'desc';
      } else {
        this.result.sort((a, b) => {
          if (a.snippet.channelId > b.snippet.channelId) {
            return -1;
          } else if (a.snippet.channelId < b.snippet.channelId) {
            return 1;
          } else {
            return 0;
          }
        });
        this.currentSort = 'asc';
      }
    }
  }

}
