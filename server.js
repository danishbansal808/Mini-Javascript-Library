const express = require('express');
const path = require('path');
var app=express();
const port=process.env.PORT || 3000
app.use('/resources',express.static(path.join(__dirname,'assets')))
app.set('view engine', 'ejs');
app.use('/resources', express.static('assets'))

app.get('/',function(req,res){
  res.render('index');
})
app.get('/greet',function(req,res){
  res.render('index');
})
app.use(function(req,res,next){
  res.status(404).send("Are You LOST!!");
  next();
})
app.use(function(err,req,res,next){
  res.send(err.message);
  next();
})


app.listen(port);
console.log(port);
