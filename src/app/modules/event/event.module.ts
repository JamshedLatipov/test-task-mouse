import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EventRoutingModule } from './event-routing.module';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { REDUCERS } from './store/reducers/main.reducer';
import { EFFECTS } from './store/effects';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventComponent } from './components/event/event.component';

@NgModule({
  declarations: [CreateEventComponent, ListEventComponent, EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('event', REDUCERS),
    EffectsModule.forFeature(EFFECTS),
  ],
})
export class EventModule {}
