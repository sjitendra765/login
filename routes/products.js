var express = require('express');
var router = express.Router();
var passport =  require('passport');
var LocalStrategy = require('passport-local'),Strategy;



router.get('/',function(req,res){
	res.render('products');
});

module.exports = router;