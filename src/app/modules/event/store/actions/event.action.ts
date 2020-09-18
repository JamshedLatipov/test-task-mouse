import { Action } from '@ngrx/store';

import { IEvent } from 'src/app/core/models/event.model';

export enum EventActionTypes {
  // List
  EventFetch = '[Event] Fetch List',
  EventFetchFail = '[Event] List Fail',
  EventFetchSuccess = '[Event] List Success',

  // Create
  EventCreate = '[Event] Create',
  EventCreateFail = '[Event] Create Fail',
  EventCreateSuccess = '[Event] Create Success',
}



// List actions
export class EventFetch implements Action {
  public readonly type: string = EventActionTypes.EventFetch;
}

export class EventFail implements Action {
  public readonly type: string = EventActionTypes.EventFetchFail;
  constructor(public payload: any) {}
}

export class EventSuccess implements Action {
  public readonly type: string = EventActionTypes.EventFetchSuccess;
  constructor(public payload: IEvent[]) {}
}

// Create actions
export class EventCreate implements Action {
  public readonly type: string = EventActionTypes.EventCreate;
  constructor(public payload: IEvent) {}
}

export class EventCreateFail implements Action {
  public readonly type: string = EventActionTypes.EventCreateFail;
  constructor(public payload: any) {}
}

export class EventCreateSuccess implements Action {
  public readonly type: string = EventActionTypes.EventCreateSuccess;
  constructor(public payload: IEvent) {}
}

export type EventActions =
  | EventFetch
  | EventSuccess
  | EventFail
  | EventCreate
  | EventCreateSuccess
  | EventCreateFail;
