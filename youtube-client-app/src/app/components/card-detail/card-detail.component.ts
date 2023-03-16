import { Component, OnInit } from '@angular/core';
import { DataType } from 'src/app/model/Data';
import { SearchService } from 'src/app/services/search.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {

  protected cards: DataType[] = [];

  protected index = 0;

  protected id = '';

  protected date?: Date;

  protected options?: {[key: string]: string};

  protected formattedDate?: string;

  constructor(private api : ApiService, private searchService : SearchService) { }

  ngOnInit(): void {
    this.api.getCard().subscribe(cards => {
      this.cards = cards;
    });

    this.searchService.index.subscribe((val:number)=>{
      this.index = val;
    });

    this.searchService.id.subscribe((val:string)=>{
      this.id = val;
    });

    this.createDate()
  }

  createDate(): void {
      this.date = new Date(this.cards[this.index].snippet.publishedAt)
      this.options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.formattedDate = this.date.toLocaleDateString('en-US', this.options);
}
}
