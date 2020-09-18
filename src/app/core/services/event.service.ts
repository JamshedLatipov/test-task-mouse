import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { IEvent } from '../models/event.model';

const BASE_URL = `${environment.api}/events`;

@Injectable()
export class EventService {
  constructor(private _http: HttpClient) {}

  public list(): Observable<IEvent[]> {
    return this._http
      .get<IEvent[]>(`${BASE_URL}/`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  public create(body: IEvent): Observable<IEvent> {
    return this._http
      .post<IEvent>(`${BASE_URL}/`, body)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
