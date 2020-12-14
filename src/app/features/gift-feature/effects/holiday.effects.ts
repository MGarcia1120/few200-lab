import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HolidayDataService } from '../services/holiday-data.service';
import * as actions from '../actions/holiday.actions';
import { map, switchMap } from 'rxjs/operators';


@Injectable()
export class HolidayEffects {




  loadHolidayData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadHolidayData),
      switchMap(() => this.service.getHolidayData()
        .pipe(
          map(response => actions.loadHolidaysSucceeded({ payload: response }))
        )
      )
    )
  );






  constructor(private service: HolidayDataService, private actions$: Actions) { }
}
