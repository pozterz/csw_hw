var express = require('express')
var app = express() 
var router = express.Router() 

var bodyparser = require('body-parser')
bodyparser = bodyparser.urlencoded({extended: false})

var oreo = [{
	'id' : '0',
    'name' : 'Tester',
    'num1' : 1,
    'num2' : 2,
    'mode' : '+',
    'result' : 3
    }
]

router.route('/')
.get(function(req,res){
	res.json({data:oreo})
})
.post(function(req,res){
	var tmp = [{
		'id' : null,
	    'name' : null,
	    'num1' : null,
	    'num2' : null,
	    'mode' : null,
	    'result' : null
	}]
	tmp.id = req.body.id
	tmp.name = req.body.name
	tmp.num1 = req.body.num1
	tmp.num2 = req.body.num2
	tmp.mode = req.body.mode
	tmp.result = tmp.num1+tmp.num2
	oreo.push(tmp)
	res.json({data:oreo})
})

router.route('/:obj_id')
.get(function(req,res){
	res.json({data:oreo[req.params.obj_id]})
})

.put(function(req,res){
	var id = req.params.obj_id
	oreo[id].name = req.body.name
	oreo[id].num1 = req.body.num1
	oreo[id].num2 = req.body.num2
	oreo[id].mode = req.body.mode
	oreo[id].result = req.body.num1 + req.body.num2
	res.json({message : 'Updated Oreo'+ id})
})

.delete(function(req,res){
	var id = req.params.obj_id
	delete oreo[id];
	res.json({message: 'Deleted Oreo' + id})
})

app.use('/api',bodyparser, router)
app.listen('5555');