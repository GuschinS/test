import { Pipe, PipeTransform } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';
import { DataType } from '../model/Data';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  constructor(private sortService: SortService) {}

  transform(value: DataType[], searchString: string, propName: keyof DataType['snippet']): DataType[] {
    const result: DataType[] = [];

    if (!value || !propName) {

      return value;
    }
    if (searchString) {
      value.forEach((item: DataType) => {
        if (item.snippet[propName]?.toString().trim().toLowerCase().includes(searchString.toLowerCase())) {

          result.push(item);

        }
      });
    }
    this.sortService.sendResult(result);
    return result;
  }
}
