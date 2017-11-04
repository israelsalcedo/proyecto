const route = require('express').Router();
const Product = require ('../models/Products');


route.get('/',function(req,res){
    Product.find({},function(err,products){
        if(err){
            console.log(err);
            return;
        }
    res.status(200).send(products);
    });
});




route.get('/:id',function(req,res){
    Product.findById(req.params.id,function(err,product){
        if(err)
            return
        
    res.status(200).send(product)
    });
});


route.post('/',function(req,res){
    let product = new Product({
        name: req.body.name,
        tittle: req.body.tittle,
        comments: req.body.comments,
        price: req.body.price
    });

    product.save(function(err,product){
        res.status(200).send(product);
    })
});




route.put('/:id',function(req,res){
    Product.findOneAndUpdate(req.params.id,
        {
            name : req.body.name,
            title: req.body.tittle,
            comments: req.body.comments,
            price: req.body.price


    },
    function (err,product){
        if(err)
        return
        res.status(202).send('Register update sucessfully');
    })
   
});



route.delete('/:id',function(req,res){
    Product.findByIdAndRemove(req.params.id,function(err,product){
        if(err)
        return;
        res.status(204).send(product)
    })
    
});

module.exports = route;

