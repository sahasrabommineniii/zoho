var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./route');
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',()=>{
    console.log('Connected to Mongo database');
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Unable to connect to Mongo databse -'+err);
    }
})

const exp = require('constants');

const port = 3000;
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', route);

app.get('/',(req, res)=>{
    res.send('foobar');
})

app.listen(port,()=>{
    console.log('Server is connected to port -'+port);
})