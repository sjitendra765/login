var express = require('express');
var router = express.Router();

router.get('/',ensureAuthenticated ,function(req,res){
	res.render('demo');
});

module.exports = router;