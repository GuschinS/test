import { Component, OnInit } from '@angular/core';
// import { CardInfo } from 'src/app/model/Card-info';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  // protected emptyData!: CardInfo;
  protected emptyData!: any;


  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.api.getCard().subscribe(res => {
      this.emptyData = res;
    });
  }

}
