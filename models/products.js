var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	product_id : {
		type: number,
		index: true
	},
	product_name:{
		type:String
	},
	description:{
		type:String
	},
	image:{

	}
});

var Products = module.exports = mongoose.model('Products', productSchema);