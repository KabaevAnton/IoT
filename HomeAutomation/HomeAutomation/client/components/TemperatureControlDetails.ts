import {Component, Injectable, Inject, OnInit} from '@angular/core';
import {TemperatureService} from '../services/TemperatureService';
import {ITemperatureData, IResponse, ResponseCode} from '../../common/interfaces/RestApiInterfaces';



@Component({
    selector: 'temperature-control-details',
    templateUrl: 'client/components/TemperatureControlDetails.tpl.html'    
})
export class TemperatureControlDetails implements OnInit {

    
    private temperatureData: ITemperatureData = null;
    constructor(@Inject(TemperatureService) private temperatureService: TemperatureService) {
        this.init();        
    }

    public ngOnInit() {        
        this.updateTemperatureData();
    }

    private init(): void {
        this.temperatureData = {
            boiler:{
                valve: null
            },
            home: null,
            outside: null,
            heatingCentre: null
        };
    }

    private updateTemperatureData(): void {        
        this.temperatureService.getTemperatureData()
            .subscribe((data) => { this.temperatureData = data; });
    }

    private onInputBoilerValveMouseUp() {
        console.log('onInputBoilerValveMouseUp', this.temperatureData.boiler.valve);
        this.temperatureService.setBoilerValve(this.temperatureData.boiler.valve)
            .subscribe((resp) => {
                if (resp.code == ResponseCode.OK) {
                    console.log('OK');
                }
                else {
                    console.error(resp.message);
                }
            });
        
    }

}
