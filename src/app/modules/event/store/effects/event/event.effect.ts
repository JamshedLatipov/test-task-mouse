import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import {
  EventFail,
  EventFetch,
  EventSuccess,
  EventCreateFail,
  EventCreateSuccess,
  EventCreate,
  EventActionTypes,
} from '../../actions/event.action';

import { EventService } from 'src/app/core/services/event.service';
import { IEvent } from 'src/app/core/models/event.model';

@Injectable()
export class EventEffect {
  @Effect()
  public events$: Observable<EventFail | EventSuccess> = this._actions$.pipe(
    ofType(EventActionTypes.EventFetch),
    switchMap((action: EventFetch) => {
      return this._eventService.list().pipe(
        map((result: IEvent[]) => new EventSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new EventFail(error))),
      );
    }),
  );

  @Effect()
  public eventsCreate$: Observable<
    EventCreateFail | EventCreateSuccess
  > = this._actions$.pipe(
    ofType(EventActionTypes.EventCreate),
    switchMap((action: EventCreate) =>
      this._eventService.create(action.payload).pipe(
        map((result: IEvent) => new EventCreateSuccess(result)),
        catchError((error: HttpErrorResponse) =>
          of(new EventCreateFail(error)),
        ),
      ),
    ),
  );

  constructor(
    private _eventService: EventService,
    private _actions$: Actions,
  ) {}
}
