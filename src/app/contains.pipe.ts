import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(values: any[], searchString: string, key: string): any[] {
    if (!values || !searchString) {
      return values;
    }
    searchString = searchString.toLowerCase();
    return values.filter(value =>
      value[key].toLowerCase().includes(searchString)
    );
  }
}
