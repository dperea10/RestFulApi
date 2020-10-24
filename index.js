var express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./src/routes/crmRoutes')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
    
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})



// // const Cat = mongoose.model('Cat', {name: String});

// // const kitty = new Cat({ name: 'mimi'});

// // kitty.save().then((res)=> {
// //     console.log(res);
// //     console.log('Meow');

// // })

// // // app.use(function(req, res, next){

// // //     console.log(`Time`, Date.now());
    

// // // })

// // app.get('/', function(req, res){
// //     console.log(`Req Method: `, req.method)
    

// // // },  function(req, res, next){
// // //     console.log(`Request Original Url`, req.originalUrl)
// // //     next();

// // // },  function(req, res, next){
// // //     res.send(`Request successful`);
// // })
