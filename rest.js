var express = require('express')
var app = express() 
var router = express.Router() 

app.use(express.static(__dirname+'/public'));
app.use('/assets',express.static(__dirname+'/assets'));
var bodyparser = require('body-parser')
//bodyparser = bodyparser.urlencoded({extended: false});

var oreo = [{
	'id' : 0,
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
var ans = null;

router.route('/test') 
	// post new bear
  .post(function(req, res) { 
     id = uid;
	 name = req.body.name;
	 num1 = parseInt(req.body.num1);
	 num2 = parseInt(req.body.num2);
	 mode = req.body.mode;
	console.log(mode);
	console.log(oreo);

	// Error type check

	if(name === "") name = "ไม่มีชื่อ";

	// End error type check

	//Calculate
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
	
// ***************************************************** //
//   v
//   v
//   v
//   v

    var tmp = {}
    tmp.id = ++uid;
    tmp.name = name;
    tmp.num1 = num1;
    tmp.num2 = num2;
    tmp.mode = mode;
    tmp.result = ans;
    oreo.push(tmp);
    res.json({message: 'Added'})
  })

  // get all bears
  .get(function(req,res) {
  	res.json(oreo)
  })

router.route('/test/:oreo_id')
	// show a bear
	.get(function(req,res) {
		res.json(oreo[req.params.oreo_id])
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

	
	// Error type check

	if(name === "") name = "ไม่มีชื่อ";

	// End error type check

	//Calculate
	
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
	
		oreo[id].result = ans
		res.json({message: 'Updated!'})
	})

	// delete a bear
	.delete(function(req,res) {
		var id = req.params.oreo_id
		delete oreo[id]
		res.json({message: 'Deleted!'})
	})

// all of our routes will be prefixed with /api 
 app.use('/api', bodyparser.json(), router)
//app.use('/api',bodyparser, router)

app.listen(5555, function (){
	console.log('Server is running...')
})