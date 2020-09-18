import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/core/models/event.model';

import * as fromEventStore from '../../store';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEventComponent implements OnInit {
  public list$: Observable<IEvent[]>;

  // TODO add spinner
  // public listLoading$: Observable<boolean>;
  // public listLoaded$: Observable<boolean>;

  constructor(
    private _route: Router,
    private _store: Store<fromEventStore.MainState>,
  ) {}

  ngOnInit(): void {
    this.list$ = this._store.select(fromEventStore.events);

    // this.listLoaded$ = this._store.select(fromEventStore.eventsLoaded);
    // this.listLoading$ = this._store.select(fromEventStore.eventsLoading);

    this._store.dispatch(new fromEventStore.EventFetch());
  }
}
