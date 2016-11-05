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
var TemperatureService_1 = require('../services/TemperatureService');
var RestApiInterfaces_1 = require('../../common/interfaces/RestApiInterfaces');
var TemperatureControlDetails = (function () {
    function TemperatureControlDetails(temperatureService) {
        this.temperatureService = temperatureService;
        this.temperatureData = null;
        this.init();
    }
    TemperatureControlDetails.prototype.ngOnInit = function () {
        this.updateTemperatureData();
    };
    TemperatureControlDetails.prototype.init = function () {
        this.temperatureData = {
            boiler: {
                valve: null
            },
            home: null,
            outside: null,
            heatingCentre: null
        };
    };
    TemperatureControlDetails.prototype.updateTemperatureData = function () {
        var _this = this;
        this.temperatureService.getTemperatureData()
            .subscribe(function (data) { _this.temperatureData = data; });
    };
    TemperatureControlDetails.prototype.onInputBoilerValveMouseUp = function () {
        console.log('onInputBoilerValveMouseUp', this.temperatureData.boiler.valve);
        this.temperatureService.setBoilerValve(this.temperatureData.boiler.valve)
            .subscribe(function (resp) {
            if (resp.code == RestApiInterfaces_1.ResponseCode.OK) {
                console.log('OK');
            }
            else {
                console.error(resp.message);
            }
        });
    };
    TemperatureControlDetails = __decorate([
        core_1.Component({
            selector: 'temperature-control-details',
            templateUrl: 'client/components/TemperatureControlDetails.tpl.html'
        }),
        __param(0, core_1.Inject(TemperatureService_1.TemperatureService)), 
        __metadata('design:paramtypes', [TemperatureService_1.TemperatureService])
    ], TemperatureControlDetails);
    return TemperatureControlDetails;
}());
exports.TemperatureControlDetails = TemperatureControlDetails;
//# sourceMappingURL=TemperatureControlDetails.js.map