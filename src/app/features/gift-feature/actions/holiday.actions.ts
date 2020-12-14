import { createAction, props } from '@ngrx/store';
import { HolidayEntity } from '../reducers/holiday.reducer';

// Initiator
export const loadHolidayData = createAction(
  '[holiday-list holidays] load holiday data'
);
// Success
export const loadHolidaysSucceeded = createAction(
  '[holiday-list holidays] load holiday data succeeded',
  props<{ payload: HolidayEntity[] }>()
);
