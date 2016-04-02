var express = require('express')
	app = express()

// ***************************************************** //
//   v
//   v
//   v
//   v
app.set('views','./public')
app.set('view engine','ejs')
//   ^
//   ^
//   ^
//   ^
// ***************************************************** //

app.use('/assets',express.static(__dirname+'/assets'));
var bodyparser = require('body-parser')
bodyparser = bodyparser.urlencoded({extended: false});

// ***************************************************** //
//   v
//   v
//   v
//   v
var oreo = [{
    'name' : 'Tester',
    'num1' : 1,
    'num2' : 2,
    'mode' : '+',
    'result' : 3
    }
];
//   ^
//   ^
//   ^
//   ^
// ***************************************************** //

var name = null;
var num1 = null;
var num2 = null;
var mode = null;
var string = null;
var alerttype = null;
var ans = null;

app.get('/',function(req,res){
	res.render('index',{k : oreo,alerttype:alerttype,str:string,num1:num1,num2:num2,names:name,mode:mode})
});
//   ^
//   ^
//   ^
//   ^
// ***************************************************** //


app.post('/',bodyparser,function(req,res){

	 name = req.body.name;
	 num1 = parseInt(req.body.num1);
	 num2 = parseInt(req.body.num2);
	 mode = req.body.mode;
	console.log(mode);

	 string = "";
	 alerttype = "";
	// Error type check

	if(name === "") name = "ไม่มีชื่อ";

	// End error type check

	//Calculate
	 ans;
	switch(mode){
		case '+':ans = num1+num2;
		break;
		case '-':ans = num1-num2;
		break;
		case '*':ans = num1*num2;
		break;
		case '/':ans = (num2>0)? (num1/num2):"Divided by zero";
		break;
		default : ans = 0;
	}
	alerttype = "info";
	string = ""+ans;
// ***************************************************** //
//   v
//   v
//   v
//   v

    var tmp = [{
        'name' : null,
        'num1' : null,
        'num2' : null,
        'mode' : null,
        'result' : null
    }];

    tmp.name = name;
    tmp.num1 = num1;
    tmp.num2 = num2;
    tmp.mode = mode;
    tmp.result = ans;
    oreo.push(tmp);
    res.render('index',{k : oreo,alerttype:alerttype,str:string,num1:num1,num2:num2,names:name,mode:mode})
	//   ^
//   ^
//   ^
//   ^
// ***************************************************** //

});

app.listen(5555);