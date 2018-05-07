var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');


var PumpStatus=false;
var SetPoint="";
var flowData="sample";

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});


router.get('/', function (req, res, next) {
	console.log("coming in get");
    res.render('index');
});

router.get('/flowdata', function (req, res, next) {
    console.log("coming in get");

    res.status(200).json({
      
   });
});

router.get('/pumpstatusandsetpoint', function (req, res, next) {
    console.log("coming in get");

    res.status(200).json({
        
   });
});



router.post('/getTollTax/', function (req, res, next){
    console.log("SSSS");
    console.log(req.body);

    var sql = "SELECT Toll_cost_car_single_trip FROM toll_tax WHERE source = '"+req.body.source+"' && destination = '"+req.body.destination +"' && No_of_tolls = '"+req.body.tolls+"'";
    console.log(sql);

con.query(sql, function (err, result) {
    if (err) {throw err;}
    console.log("record found");

    var array = [];
    //console.log(result[0]);
    console.log(result[0].Toll_cost_car_single_trip);    

    if(result[0].Toll_cost_car_single_trip !== undefined)
        {
            console.log(result[0].Toll_cost_car_single_trip);
            res.end(result[0].Toll_cost_car_single_trip.toString());//SON.stringify(array));
        }
        else
        {
            console.log("no result");
            res.end();
        }
});
   
});



router.post('/users/signin', function (req, res, next) {
	console.log(req.body);

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    var sql = "SELECT * FROM users WHERE username = '"+req.body.name+"' && password = '"+req.body.pass +"'";
        console.log(sql);

    con.query(sql, function (err, result) {
        if (err) {throw err;}
        console.log("record found");
        var array = [];
        //console.log(result[0]);

        if(result[0]!== undefined)
        {
            console.log(result[0]);
            array = [ result[0].username.toString(), result[0].address.toString(),result[0].adharNo.toString(),result[0].drivingLNo.toString(),result[0].state.toString(),result[0].phoneNo.toString(),result[0].vehicleNo.toString() ];
            console.log(array);
            res.send(array);//SON.stringify(array));
        }
        else
        {
            console.log("no result");
            res.end();
        }

    });

});

router.post('/users/signup', function (req, res, next) {
	
console.log(req.body);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

var sql = "INSERT INTO users (username,password, address, adharNo, drivingLNo, state, phoneNo, vehicleNo) VALUES ('"+req.body.username+"','"+req.body.password+"','"+req.body.address+"','"+req.body.aadhar+"','"+req.body.dlNo+"','"+req.body.state+"','"+req.body.phoneNo+"','"+req.body.VehicleNo+"')";
    
con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
      res.end('true');
    });
});









router.post('/smsService', function (req, res, next) {
console.log(req.body);

var sns = new AWS.SNS();
var phoneNo = "91"+req.body.phoneNumber;

console.log(phoneNo);

var params = {
  Message: 'Congrats Booking Done Money is deduced from your wallet i.e.'+req.body.cost+' ₹',
  MessageStructure: 'string',
  PhoneNumber: phoneNo
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

console.log("doneSMs");

});

var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
AWS.config.loadFromPath('./routes/credentials.json');


module.exports = router;
