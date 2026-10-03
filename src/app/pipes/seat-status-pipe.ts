import { Pipe, PipeTransform } from '@angular/core';

export type SeatStatus = 'available' | 'limited' | 'full';

@Pipe({
  name: 'seatStatus',
  standalone: true
})
export class SeatStatusPipe implements PipeTransform {
  transform(remaining: number): SeatStatus {
    if (remaining <= 0) return 'full';
    if (remaining < 10) return 'limited';
    return 'available';
  }
}