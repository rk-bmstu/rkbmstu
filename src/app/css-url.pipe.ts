import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssUrl'
})
export class CssUrlPipe implements PipeTransform {

  transform(url: string): any {
    return 'url(' + url + ')';
  }

}
