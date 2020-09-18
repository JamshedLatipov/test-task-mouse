import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { IEvent } from '../models/event.model';

export class EventInMemoryData implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {
    const events: IEvent[] = [
      { id: 1, name: 'Event 1', address: 'NY, Addr', date: new Date() },
    ];

    return { events };
  }
}
