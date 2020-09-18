import { IEvent } from 'src/app/core/models/event.model';

import {
  EventActionTypes,
  EventActions,
  EventCreateSuccess,
  EventSuccess,
} from '../../actions/event.action';

export interface EventState {
  data?: IEvent[];
  loaded?: boolean;
  loading?: boolean;
  success?: boolean;
}

export const initialState: EventState = {
  data: [],
  loaded: false,
  loading: false,
  success: false,
};

export function reducer(
  state: EventState = initialState,
  action: EventActions,
): EventState {
  switch (action.type) {
    case EventActionTypes.EventFetch: {
      return {
        ...state,
        loading: true,
        success: false,
      };
    }
    case EventActionTypes.EventFetchFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
        success: false,
      };
    }
    case EventActionTypes.EventFetchSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        success: true,
        data: (action as EventSuccess).payload,
      };
    }
    // Create
    case EventActionTypes.EventCreate: {
      return {
        ...state,
        loading: true,
        success: false,
      };
    }
    case EventActionTypes.EventCreateFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
        success: false,
      };
    }
    case EventActionTypes.EventCreateSuccess: {
      const newEvent = [...state.data, (action as EventCreateSuccess).payload];

      return {
        data: newEvent,
        loading: false,
        loaded: true,
        success: true,
      };
    }
    default:
      return state;
  }
}

export const eventFetch = (state: EventState) => state.data;
export const eventLoading = (state: EventState) => state.loading;
export const eventLoaded = (state: EventState) => state.loaded;
