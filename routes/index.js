var express = require('express');
var router = express.Router();
const userdata=require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/send',async function(req,res){
  const createddata=await userdata.create({
    name:req.body.name,
    email:req.body.email
  });
  console.log(createddata);
  res.send('Data send ho gya hai');
});
module.exports = router;
