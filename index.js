const express = require('express');
const app = express();
const port = 8000;
const data = require('./data');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    max : 20,
    window : 60000
})


app.get('/api/getData',limiter,function(req,res){
      res.send({
        status:"Success",
        data:data
      })
})

app.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log('Server is Running on port: ',port);
});