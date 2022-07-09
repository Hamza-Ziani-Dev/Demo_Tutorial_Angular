import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name : 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: any, limit?: any){
    if(!value){
      return null;
    }else{
      return value.substring(0, limit || 10)+ '...';
    }
  }
}
