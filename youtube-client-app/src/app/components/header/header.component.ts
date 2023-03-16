import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  public searchTerm !: string;

  public showSort = false;

  constructor(private searchService : SearchService) {}

  searching(key: string) {
    this.searchTerm = key;
    this.searchService.search.next(this.searchTerm);
  }
}
