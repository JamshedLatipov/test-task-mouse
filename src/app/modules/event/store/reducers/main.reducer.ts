import { ActionReducerMap } from '@ngrx/store';

import * as storeNodes from '../store.nodes';

import * as fromEvent from './event/event.reducer';

export interface MainState {
  [storeNodes.EVENT_NODE]: fromEvent.EventState;
}

export const REDUCERS: ActionReducerMap<MainState> = {
  [storeNodes.EVENT_NODE]: fromEvent.reducer,
};
