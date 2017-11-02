var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'1102'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  con.query(`SELECT * FROM lyt`, function (err, rows) {
    res.send(rows);
  })
});
router.post('/ht', function(req, res, next) {
  var ipt1=req.body.ipt1;
  var ipt2=req.body.ipt2;
  res.header('Access-Control-Allow-Origin','*');
  con.query(`INSERT INTO lyt (title,concent) VALUES ('${ipt1}','${ipt2}')`, function (err, rows) {
    if(rows!=""||rows!=null){
      con.query("SELECT * FROM lyt",function(err,rows){
        res.send(rows)
      })
    }
  })
});

module.exports = router;
