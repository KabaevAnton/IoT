"use strict";
var router_1 = require('@angular/router');
var Dashboard_1 = require('../components/Dashboard');
var TemperatureControlDetails_1 = require('../components/TemperatureControlDetails');
var appRoutes = [
    { path: '', component: Dashboard_1.Dashboard },
    { path: 'temperature', component: TemperatureControlDetails_1.TemperatureControlDetails }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map