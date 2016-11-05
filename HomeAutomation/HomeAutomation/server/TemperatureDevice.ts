import RestApiInterfaces = require('../common/interfaces/RestApiInterfaces');


export interface ITemperatureDevice {
    getData(): RestApiInterfaces.ITemperatureData;
    setBoilerValve(valve: number):void
}


export class TemperatureDevice implements ITemperatureDevice {

    constructor(private serialPort: any)
    {
        serialPort.on('data', function (data) {
            console.log('TemperatureDevice data recived', data);
        });
    }

    public getData() : RestApiInterfaces.ITemperatureData {
        return {
            boiler: {
                valve: 12
            },
            home: 21,
            outside: 15,
            heatingCentre: 16
        }
    }

    public setBoilerValve(valve: number): void {
        console.log('try to set boiler valve', valve);
        this.serialPort.write(valve.toString() + '\n', (e) => {
            console.log('Error setting boiler valve', e, valve);
        });
        
    }
    
}

export class TemperatureDeviceFake implements ITemperatureDevice {
    

    public getData(): RestApiInterfaces.ITemperatureData {
        return {
            boiler: {
                valve: 12
            },
            home: 21,
            outside: 15,
            heatingCentre: 16
        }
    }

    public setBoilerValve(valve: number): void {
        console.log('TemperatureDevice.setBoilerValve', valve);
    }

}


export function CreateTemperatureDevice(config: any): ITemperatureDevice {
    if (config.temperatureDevicePort) {
        return new TemperatureDevice(config.temperatureDevicePort);
    }
    else
    {
        return new TemperatureDeviceFake();
    }
    
}
