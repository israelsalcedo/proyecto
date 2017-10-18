const route = require('express').Router();


route.get('/',function(req,res){
    res.status(200).send('Hola carnaval');

});



route.post('/',function(req,res){
    res.status(200).send('Hola papu');
});




route.put('/',function(req,res){
    res.status(200).send('Hola papu');
});



route.delete('/',function(req,res){
    res.status(200).send('Hola papu');
});

module.exports = route;

