import { Pipe, PipeTransform } from '@angular/core';
import { DataType } from '../model/Data';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: DataType[], filterString: string, propName: keyof DataType['snippet']): DataType[] {
    const result: DataType[] = [];

    if (!value || !propName) {

      return value;
    }
    if (filterString){
    value.forEach((item: DataType) => {
      if (item.snippet[propName]?.toString().trim().toLowerCase().includes(filterString.toLowerCase())) {

        result.push(item);
      }
    });
  }
  return result
}
}
