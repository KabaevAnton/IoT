import express = require('express');
import http = require('http');
import path = require('path');
import RestApiInterfaces = require('./common/interfaces/RestApiInterfaces');
import TemperatureDevice = require('./server/TemperatureDevice');


var SerialPort: any = require('./node_modules/serialport/lib/serialport');
SerialPort.list(function (err, ports) {
    //console.log(ports);
});


var port = new SerialPort('COM5',    {
    parser: SerialPort.parsers.readline('\n')
    }, function (err) {
        if (err) {
            console.log('error',err);
        }
    });

port.on('open', function () {
    console.log('port opend');
    
});


port.on('error', function (err) {
    console.log('Error: ', err.message);
})

var temperatureDevice: TemperatureDevice.ITemperatureDevice = TemperatureDevice.CreateTemperatureDevice({
    temperatureDevicePort: null
});

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
//app.use(app.router);


//import stylus = require('stylus');
//app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use('/lib',express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static(path.join(__dirname, 'client')));
app.use('/common', express.static(path.join(__dirname, 'common')));
app.use(express.static(path.join(__dirname, 'static')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/api/temperatureDevice', function (req, res) {    
    res.json(temperatureDevice.getData());
});


app.put('/api/temperatureDevice/setBoilerValve', function (req, res) {    
    var request: RestApiInterfaces.IRequest<number> = req.body;
    var result: RestApiInterfaces.IResponse;
    try {
        temperatureDevice.setBoilerValve(request.data);
        result = {
            code: RestApiInterfaces.ResponseCode.OK
        }        
    }
    catch (e) {
        result = {
            code: RestApiInterfaces.ResponseCode.ERROR,
            message: 'Some error happend'
        }
        
    }
    res.json(result);

    
    
});


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


