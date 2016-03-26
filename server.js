var express = require('express');
app = express();

app.use("/css", express.static(__dirname + '/css'));

app.set('views','./views');
app.set('view engine','ejs');

var fruits = 
	[
		{name : 'Banana', price : 30 , amount : 150 },
		{name : 'Apple', price : 20 , amount : 200 },
		{name : 'Coconut', price : 30 , amount : 350 },
		{name : 'Mango', price : 25 , amount : 400 },
		{name : 'Water Melon', price : 35 , amount : 120 },
		{name : 'Cherry', price : 100 , amount : 125 },
		{name : 'Orange', price : 15 , amount : 141 },
		{name : 'Lemon', price : 30 , amount : 184  },
		{name : 'Lime', price : 15 , amount : 151 },
		{name : 'Melon', price : 40 , amount : 94 },
		{name : 'Blueberry', price : 220 , amount : 48 },
		{name : 'Raspberry', price : 200 , amount : 79 },
		{name : 'Strawberry', price : 150 , amount : 84 },
		{name : 'Pineapple', price : 40 , amount : 98 },
		{name : 'Grapes', price : 20 , amount : 84 },
		{name : 'Kiwi', price : 40 , amount : 54 },
		{name : 'Durain', price : 850 , amount : 21 },
	];

var color = ['success','info','danger','warning','active'];

app.get('/fruit',function(req,res){
	res.render('index',{ fruitlist : fruits , colors : color});
});
app.listen('4567');