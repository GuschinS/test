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

  searching(event: KeyboardEvent) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.searchService.search.next(this.searchTerm);
  }
}
