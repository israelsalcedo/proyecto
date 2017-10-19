const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  units: Number,
  dimensiones:{
      height: Number, 
      width:Number
    },
  created_at  : {type: Date,default: Date.now},
  numeroPost : Number
    
});


let Product = mongoose.model('Product',productSchema);

module.exports = Product;


