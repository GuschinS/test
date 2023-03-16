import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataType } from 'src/app/model/Data';
import { ApiService } from '../../services/api.service';
import { SearchService } from 'src/app/services/search.service';
import { Observable } from 'rxjs';
import {DATA} from '../../data'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit, OnDestroy {

  protected cards: DataType[] = [];

  protected filterCategory!: DataType[];

  protected searchKey = '';

  protected indexCard?: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  protected obs!: Observable<any>;

  protected dataSource: MatTableDataSource<DataType> = new MatTableDataSource<DataType>(DATA);

  constructor(private api : ApiService, private searchService : SearchService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.api.getCard().subscribe(cards => {
      this.cards = cards;
      this.filterCategory = cards;
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();

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

    ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
