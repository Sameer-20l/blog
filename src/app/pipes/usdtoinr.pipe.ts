import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoinr',
  standalone: true
})
export class UsdtoinrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
