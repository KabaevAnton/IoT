import {Component, Injectable, Inject, OnInit} from '@angular/core';
import {TemperatureService} from '../services/TemperatureService'


@Component({
    selector: 'temperature-control',
    templateUrl: 'client/components/TemperatureControl.tpl.html'    
})

export class TemperatureControl implements OnInit {
    private home: number;
    private outside: number;
    private heatingCentre: number;

    constructor(@Inject(TemperatureService) private temperatureService: TemperatureService) {      
        
    }

    public ngOnInit() {
        this.temperatureService.getTemperatureData()
            .subscribe((data) => {
                this.home = data.home
                this.outside = data.outside;
                this.heatingCentre = data.heatingCentre;
            });
    }
}
