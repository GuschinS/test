import { Component, OnInit } from '@angular/core';
import { DataType } from 'src/app/model/Data';
import { ApiService } from '../../services/api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  protected cards: DataType[] = [];

  protected filterCategory!: DataType[];

  protected searchKey = '';

  protected indexCard?: number;

  protected date?: Date;

  protected today: Date = new Date;

  protected diffInDays?: number;

  constructor(private api : ApiService, private searchService : SearchService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.api.getCard().subscribe(cards => {
      this.cards = cards;
      this.filterCategory = cards;
    });

    this.searchService.search.subscribe((val:string)=>{
      this.searchKey = val;
    });
  }

  going(id: string) {
    this.cards.forEach((el, index) => {
      if (el.id === id) {
        this.indexCard = index;
        this.searchService.index.next(this.indexCard);
        this.searchService.id.next(id);
      }
    });
  }

  checkDate(key: string) {
    this.date = new Date(key);
    this.diffInDays = Math.floor((this.today.getTime() - this.date.getTime()) / (1000 * 60 * 60 * 24));
    if (this.diffInDays < 7) {
      return 'blue';
    } else if (this.diffInDays >= 7 && this.diffInDays < 31) {
      return 'green';
    } else if (this.diffInDays >= 31 && this.diffInDays < 180) {
      return 'yellow';
    }
    return 'red';
  }

}
