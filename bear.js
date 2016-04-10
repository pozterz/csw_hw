var express = require('express'),
	app = express(),
	router = express.Router(),
	bodyParser = require('body-parser')
  
var bears = [{'id':0,'name':'Vinnie','weight':100},
			 {'id':1,'name':'Pooh','weight':120}];

var bearIndex = 2;

app.use(express.static('public')) 

router.route('/bears') 
	.get( function(req,res) {
		res.json(bears);
	})

	.post(function(req, res) { 
	    var bear = {}; 
	    bear.id = bearIndex++
	    bear.name = req.body.name
	    bear.weight = req.body.weight
	    bears.push(bear); 
	    // res.json(bears); 
	    res.json({ message: 'Added a new bear'} ) 
	})
  
router.route('/bears/:bear_id')
	.get(function(req,res){
		res.json(bears[req.params.bear_id] )
	})

	.put(function(req,res){
		var id = req.params.bear_id
		bears[id].name = req.body.name
		bears[id].weight = req.body.weight
		// res.json(bears[id])
		res.json({message: 'Bear updated'})
	})

	.delete(function(req,res){
		var id = req.params.bear_id
		delete bears[id]
		// res.json(bears)
		res.json({message: 'Bear deleted'})
	})

// all of our routes will be prefixed with /api 
app.use('/api', bodyParser.json(), router)
// app.use('/api',bodyParser.urlencoded({extended:false}), router)

app.listen(8000, function() {
	console.log('server is running...')
})