import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';

import * as fromEventStore from '../../store';
import { EventCreate } from '../../store';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;
  private _date: Date;

  private readonly dateRegExp = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/;

  constructor(
    private _route: Router,
    private _location: Location,
    private _store: Store<fromEventStore.MainState>,
  ) {}

  ngOnInit(): void {
    this.eventForm = new FormGroup(
      {
        date: new FormControl('', [Validators.pattern(this.dateRegExp)]),
        address: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
      },
      { updateOn: 'change' },
    );

    this.eventForm.controls['date'].valueChanges.subscribe((data) => {
      try {
        this._date = new Date(data);
      } catch (error) {
        this._date = null;
        console.error('invalid date format');
      }
    });
  }

  back() {
    this._location.back();
  }

  add() {
    if (this.eventForm.valid) {
      this._store.dispatch(
        new EventCreate({
          address: this.eventForm.value['address'],
          date: this._date,
          name: this.eventForm.value['name'],
        }),
      );
      this._route.navigate(['/events']);
    }
  }
}
