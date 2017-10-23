const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let productSchema = new Schema({
  tittle:String,
  name: String,
  comments:[],
  created_at  : {type: Date,default: Date.now}
  
    
});


let Product = mongoose.model('Product',productSchema);

module.exports = Product;


