import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  protected dataSource!: MatTableDataSource<DataType>;

  protected filterCategory!: DataType[];

  protected searchKey = '';

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private api : ApiService, private SearchService : SearchService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.api.getCard().subscribe(cards => {
      this.cards = cards;
      this.filterCategory = cards;
      this.dataSource = new MatTableDataSource<DataType>(this.cards);
      this.dataSource.paginator = this.paginator;
    });
    this.SearchService.search.subscribe((val:string)=>{
      this.searchKey = val;
    });
  }

}
