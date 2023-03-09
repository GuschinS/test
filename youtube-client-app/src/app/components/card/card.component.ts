import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CardInfo } from 'src/app/model/Card-info';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  protected cards!: any;
  protected dataSource!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.api.getCard().subscribe(result => {
      this.cards = result;
      this.dataSource = new MatTableDataSource<CardInfo>(this.cards)
      this.dataSource.paginator = this.paginator
    });
  }

}
