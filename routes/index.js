const express = require('express');
const router = express.Router();

/* GET home page.*/
router.get('/', function(req, res, next){
  //res.render('index', { title: 'Express' });
  res.send('hello world');
});

router.get('/userinfo', function(req,res, next){
  console.log("first middleware",req.method);
  next();
},
function(req, res, next)
  {
   res.json({
     name:"kanon",
     age:34,
   })
  }
)
module.exports = router;
