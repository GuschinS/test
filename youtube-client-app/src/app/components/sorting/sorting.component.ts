import { Component } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})

export class SortingComponent  {

  constructor(private sortService: SortService) { }

  sortCardsByV() {
    this.sortService.sortCardsByViewed();
  }

  sortCardsByD() {
    this.sortService.sortCardsByDate();
  }
}
