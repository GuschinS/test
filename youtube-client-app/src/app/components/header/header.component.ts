import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  public searchTerm !: string;

  public showSort = false;

  constructor(private searchService : SearchService, private router: Router) {}

  searching(key: string) {
    this.searchTerm = key;
    this.searchService.search.next(this.searchTerm);
    this.router.navigate(['/search']);
  }
}
