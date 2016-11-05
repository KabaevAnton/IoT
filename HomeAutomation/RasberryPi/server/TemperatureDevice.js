"use strict";
var TemperatureDevice = (function () {
    function TemperatureDevice(serialPort) {
        console.debug('TemperatureDevice constructor', serialPort)
        this.serialPort = serialPort;
        serialPort.on('data', function (data) {
            console.log('TemperatureDevice data recived', data);
        });
    }
    TemperatureDevice.prototype.getData = function () {
        return {
            boiler: {
                valve: 12
            },
            home: 21,
            outside: 15,
            heatingCentre: 16
        };
    };
    TemperatureDevice.prototype.setBoilerValve = function (valve) {
        console.log('try to set boiler valve', valve);
        this.serialPort.write(valve.toString() + '\n', function (e) {
            console.error('Error setting boiler valve', e);
        });
    };
    return TemperatureDevice;
}());
exports.TemperatureDevice = TemperatureDevice;
var TemperatureDeviceFake = (function () {
    function TemperatureDeviceFake() {
    }
    TemperatureDeviceFake.prototype.getData = function () {
        return {
            boiler: {
                valve: 12
            },
            home: 21,
            outside: 15,
            heatingCentre: 16
        };
    };
    TemperatureDeviceFake.prototype.setBoilerValve = function (valve) {
        console.log('TemperatureDevice.setBoilerValve', valve);
    };
    return TemperatureDeviceFake;
}());
exports.TemperatureDeviceFake = TemperatureDeviceFake;
function CreateTemperatureDevice(config) {
    if (config.temperatureDevicePort) {
        return new TemperatureDevice(config.temperatureDevicePort);
    }
    else {
        return new TemperatureDeviceFake();
    }
}
exports.CreateTemperatureDevice = CreateTemperatureDevice;
//# sourceMappingURL=TemperatureDevice.js.map