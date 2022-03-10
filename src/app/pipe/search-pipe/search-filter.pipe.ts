import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args) return value;
    console.log(args);
    console.log(value);
    return value.filter((item: any) =>{
      return item.title.includes(args) | item.description.includes(args);
    })
  }

}