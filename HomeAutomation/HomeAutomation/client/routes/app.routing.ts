import { Routes, RouterModule } from '@angular/router';

import { App }  from '../components/app';
import { Dashboard } from '../components/Dashboard';
import { TemperatureControl } from '../components/TemperatureControl';
import { TemperatureControlDetails } from '../components/TemperatureControlDetails';

const appRoutes: Routes = [
    { path: '', component: Dashboard },
    { path: 'temperature', component: TemperatureControlDetails }
];

export const routing = RouterModule.forRoot(appRoutes);