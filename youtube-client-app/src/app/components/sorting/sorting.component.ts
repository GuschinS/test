import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnChanges  {
ngOnChanges(changes: SimpleChanges) {
    if (changes['hidden']) {
      if (changes['hidden'].currentValue) {
        // ComponentB is hidden
      } else {
        // ComponentB is shown
      }
    }
  }
}
