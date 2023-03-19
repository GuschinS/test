import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { KeyWordType } from 'src/app/model/KeyWordType';
import { SortService } from 'src/app/services/sort.service';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})

export class AutocompleteComponent implements OnInit {

  protected words!: KeyWordType[];

  protected username!: string;

  protected obj = this.sortService.getCards();

  constructor(private service: AutoService, private sortService: SortService) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.service.getData().subscribe((res) => {
      this.words = res;
      console.log(this.words);
    });
  }

  nameValue(name: string) {
    this.username = name;

    if (this.obj) {
      const enterWord = this.sortService.findKeyPath(this.obj[0], this.username);
      console.log('enterWord: ', enterWord?.join('.'));
      if (enterWord) {
        this.sortService.sortCardsByEnterWord(enterWord);
      }
    }
    console.log(this.username);
  }
}
