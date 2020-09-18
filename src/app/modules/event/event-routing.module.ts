import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { ListEventComponent } from './pages/list-event/list-event.component';

const routes: Routes = [
  {
    path: '',
    component: ListEventComponent,
  },
  {
    path: 'add',
    component: CreateEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
