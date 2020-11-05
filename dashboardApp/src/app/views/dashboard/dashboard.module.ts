import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from '@ag-grid-community/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { DashboardComponent } from './dashboard.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AggridComponent } from './aggrid/aggrid.component';
import { DetailCellRendererComponent } from './aggrid/detail-cell-renderer/detail-cell-renderer.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    DashboardComponent,
    FullCalendarComponent,
    AggridComponent,
    DetailCellRendererComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    AgGridModule.withComponents([DetailCellRendererComponent]),
  ]
})
export class DashboardModule { }
