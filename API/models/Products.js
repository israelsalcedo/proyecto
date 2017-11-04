const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let productSchema = new Schema({
  tittle:String,
  name: String,
  comments:[],
  created_at  : {type: Date,default: Date.now},
  price: String
  
    
});


let Product = mongoose.model('Product',productSchema);

module.exports = Product;


