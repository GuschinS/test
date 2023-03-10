import { Pipe, PipeTransform } from '@angular/core';
import { DataType } from '../model/Data';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName:string) {
    const result: DataType[] = [];
    if (!value || filterString === '' || propName === '') {
      return value;
    }

    value.forEach((item)=>{
      if (item.snippet[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(item);
      }
    });


    return result;
  }

}
