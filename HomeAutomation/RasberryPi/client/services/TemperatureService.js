"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var TemperatureService = (function () {
    function TemperatureService(http) {
        this.http = http;
    }
    TemperatureService.prototype.setBoilerValve = function (valve) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var req = {
            data: valve
        };
        return this.http.put('api/temperatureDevice/setBoilerValve/', JSON.stringify(req), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TemperatureService.prototype.getTemperatureData = function () {
        return this.http.get('/api/temperatureDevice')
            .map(function (res) { return res.json(); });
    };
    TemperatureService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TemperatureService);
    return TemperatureService;
}());
exports.TemperatureService = TemperatureService;
//# sourceMappingURL=TemperatureService.js.map