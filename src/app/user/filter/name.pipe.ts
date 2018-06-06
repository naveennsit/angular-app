import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a, b) => a.first_name.localeCompare(b.first_name));
  }

}
