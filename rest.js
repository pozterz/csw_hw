var express = require('express')
var app = express() 
var router = express.Router() 

app.set('views','./public')
app.set('view engine','ejs')
app.use('/assets',express.static(__dirname+'/assets'));
var bodyparser = require('body-parser')
bodyparser = bodyparser.urlencoded({extended: false});

var oreo = [{
	'id' : '0',
    'name' : 'Tester',
    'num1' : 1,
    'num2' : 2,
    'mode' : '+',
    'result' : 3
    }
]
var uid = 0;
var name = null;
var num1 = null;
var num2 = null;
var mode = null;
var string = null;
var alerttype = null;
var ans = null;

router.route('/') 
	// post new bear
  .post(function(req, res) { 
     id = uid;
	 name = req.body.name;
	 num1 = parseInt(req.body.num1);
	 num2 = parseInt(req.body.num2);
	 mode = req.body.mode;
	console.log(mode);
	console.log(oreo);

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
    	'id' : null,
        'name' : null,
        'num1' : null,
        'num2' : null,
        'mode' : null,
        'result' : null
    }];
    tmp.id = uid;
    tmp.name = name;
    tmp.num1 = num1;
    tmp.num2 = num2;
    tmp.mode = mode;
    tmp.result = ans;
    oreo.push(tmp);
    uid++;
    res.render('index',{k : oreo,alerttype:alerttype,str:string,num1:num1,num2:num2,names:name,mode:mode})
  })

  // get all bears
  .get(function(req,res) {
  	res.render('index',{k : oreo,alerttype:alerttype,str:string,num1:num1,num2:num2,names:name,mode:mode})
  })

router.route('/:oreo_id')
	// show a bear
	.get(function(req,res) {
		res.render('show',{k : oreo[req.params.oreo_id]})
	})

	// update a bear
	.put(function(req,res) {
		var id = req.params.oreo_id
		oreo[id].name = req.body.name
		oreo[id].num1 = parseInt(req.body.num1);
		oreo[id].num2 = parseInt(req.body.num2);
		oreo[id].mode = req.body.mode
		
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
	oreo[id].result = req.body.ans
		res.json({message: 'Updated!'})
	})

	// delete a bear
	.delete(function(req,res) {
		var id = req.params.oreo_id
		delete oreo[id]
		res.json({message: 'Deleted!'})
	})

// all of our routes will be prefixed with /api 
// app.use('/api', bodyParser.json(), router)
app.use('/api',bodyparser, router)

app.listen(5555, function (){
	console.log('Server is running...')
})