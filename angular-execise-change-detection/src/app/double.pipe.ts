import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  pure: true, // default, but explicit for clarity
})
export class DoublePipe implements PipeTransform {
  transform(value: number): number {
    console.log('DoublePipe called');
    return value * 2;
  }
}
