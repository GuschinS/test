import { Component } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})

export class SortingComponent  {

  protected searchTag !: string;

  protected obj = this.sortService.getCards();


  constructor(private sortService: SortService) { }

  sortCardsByV() {
    this.sortService.sortCardsByViewed();
  }

  sortCardsByD() {
    this.sortService.sortCardsByDate();
  }

  sortCardsByEnter() {
    if (this.obj) {
      const enterWord = this.sortService.findKeyPath(this.obj[0], this.searchTag);
      console.log('enterWord: ', enterWord?.join('.'));
      if (enterWord) {
        this.sortService.sortCardsByEnterWord(enterWord);
      }
    }
  }

  searchEnter(event: KeyboardEvent) {
    this.searchTag = (event.target as HTMLInputElement).value;
    console.log(this.searchTag);
  }

}
