import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  public searchTerm !: string;

  constructor(private inputSearch : SearchService) {}

  searching(event: KeyboardEvent) {
    console.log('event: ', event);
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.inputSearch.search.next(this.searchTerm);
  }
}
