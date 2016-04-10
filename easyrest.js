var express = require('express')
var app = express() 
var router = express.Router() 

var bodyparser = require('body-parser')
bodyparser = bodyparser.urlencoded({extended: false})

var fruits = 
	[
		{'id' : 1, name : 'Banana', price : 30 , amount : 150 },
		{'id' : 2, name : 'Apple', price : 20 , amount : 200 },
		{'id' : 3, name : 'Coconut', price : 30 , amount : 350 },
		{'id' : 4, name : 'Mango', price : 25 , amount : 400 },
		{'id' : 5, name : 'Water Melon', price : 35 , amount : 120 },
		{'id' : 6, name : 'Cherry', price : 100 , amount : 125 },
		{'id' : 7, name : 'Orange', price : 15 , amount : 141 },
		{'id' : 8, name : 'Lemon', price : 30 , amount : 184  },
		{'id' : 9, name : 'Lime', price : 15 , amount : 151 },
		{'id' : 10, name : 'Melon', price : 40 , amount : 94 },
		{'id' : 11, name : 'Blueberry', price : 220 , amount : 48 },
		{'id' : 12, name : 'Raspberry', price : 200 , amount : 79 },
		{'id' : 13, name : 'Strawberry', price : 150 , amount : 84 },
		{'id' : 14, name : 'Pineapple', price : 40 , amount : 98 },
		{'id' : 15, name : 'Grapes', price : 20 , amount : 84 },
		{'id' : 16, name : 'Kiwi', price : 40 , amount : 54 },
		{'id' : 17, name : 'Durain', price : 850 , amount : 21 },
	];

router.route('/')
.get(function(req,res){
	res.json({data:fruits})
})
.post(function(req,res){
	var tmp = {}
	tmp.id = req.body.id
	tmp.name = req.body.name
	tmp.price = req.body.price
	tmp.amount = req.body.amount
	fruits.push(tmp)
	res.json({data:fruits})
})

router.route('/:obj_id')
.get(function(req,res){
	res.json({data:fruits[req.params.obj_id]})
})

.put(function(req,res){
	var id = req.params.obj_id
	fruits[id].name = req.body.name
	fruits[id].price = req.body.price
	fruits[id].amount = req.body.amount
	res.json({message : 'Updated '+ id})
})

.delete(function(req,res){
	var id = req.params.obj_id
	delete fruits[id];
	res.json({message: 'Deleted ' + id})
})

app.use('/api',bodyparser, router)
app.listen('5555');