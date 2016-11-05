
export interface IBoiler {
    valve?: number;
}

export interface ITemperatureData {
    boiler: IBoiler;
    home?: number;
    outside?: number;
    heatingCentre?: number;
}

export enum ResponseCode {
    OK, ERROR
}

export interface IResponse {
    code: ResponseCode;
    message?: string;
}

export interface IGenericResponse<T> extends IResponse {
    data?: T;
}

export interface IRequest<T> {
    data: T;
}