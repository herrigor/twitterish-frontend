import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'timeago.js';

@Pipe({ name: 'timeago' })
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | number) {
    return (typeof value === 'number') ? format((value as number), 'en-US') : value;
  }
}