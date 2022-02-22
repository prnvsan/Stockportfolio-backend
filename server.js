const { createPool } = require('mysql')
var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

const pool = createPool({
 host: "localhost",
 user: "root",
 password: "",
 database: "test",
 connectionLimit: 10

})

app.get('/', function(req,res)
{
    pool.query(`select * from person`, function(err, result, fields) {

        if (err) {
            return console.log(err);
        }
        else{
        return res.send(JSON.stringify(result));
        }
    })
   })
app.listen(1337);
