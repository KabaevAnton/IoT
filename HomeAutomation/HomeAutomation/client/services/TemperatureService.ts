import {Injectable, Inject} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {ITemperatureData, IResponse, IRequest} from '../../common/interfaces/RestApiInterfaces'




@Injectable()
export class TemperatureService {
    private temperatureData: ITemperatureData;    



    constructor( @Inject(Http) private http: Http) {        
    }
    
    public setBoilerValve(valve: number): Observable<IResponse> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var req: IRequest<number> = {
            data: valve
        }
        return this.http.put('api/temperatureDevice/setBoilerValve/', JSON.stringify(req), {headers: headers})
            .map(res => res.json());
    }       

    public getTemperatureData(): Observable<ITemperatureData> {
        return this.http.get('/api/temperatureDevice')
            .map(res => res.json());            
    }
}
