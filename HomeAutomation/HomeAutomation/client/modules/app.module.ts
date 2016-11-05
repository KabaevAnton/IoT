import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { routing } from '../routes/app.routing';

import { App }  from '../components/app';
import { Dashboard } from '../components/Dashboard';
import { TemperatureControl } from '../components/TemperatureControl';
import { TemperatureControlDetails } from '../components/TemperatureControlDetails';

import { TemperatureService } from '../services/TemperatureService'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        App, Dashboard, TemperatureControl, TemperatureControlDetails
    ],
    providers: [TemperatureService],
    bootstrap: [App]
})
export class AppModule { }