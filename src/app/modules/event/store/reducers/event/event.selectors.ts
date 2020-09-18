import { createSelector } from '@ngrx/store';

import * as storeNodes from '../../store.nodes';
import * as fromMain from '../main.reducer';

import * as fromEvents from './event.reducer';

export const getEventState = (state: fromMain.MainState) => {
  return state[storeNodes.EVENT_ROOT][storeNodes.EVENT_NODE];
};

export const events = createSelector(getEventState, fromEvents.eventFetch);

export const eventsLoaded = createSelector(
  getEventState,
  fromEvents.eventLoaded,
);

export const eventsLoading = createSelector(
  getEventState,
  fromEvents.eventLoading,
);
