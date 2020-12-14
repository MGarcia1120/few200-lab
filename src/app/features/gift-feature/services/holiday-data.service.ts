import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'; // ONLY IMPORT THIS ONE EVER EVER EVER
import { HolidayEntity } from '../reducers/holiday.reducer';
@Injectable()


export class HolidayDataService {


  readonly baseUrl = environment.giftApiUrl;

  constructor(private client: HttpClient) { }


  // a way to get the data.
  getHolidayData(): Observable<HolidayEntity[]> {
    return this.client.get<{ data: HolidayEntity[] }>(this.baseUrl + 'holidays')
      .pipe(
        map(response => response.data)
      );
  }
}
