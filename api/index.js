// const http=require('http');
// const movieData=require('./movies_Data.json');

// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// app.get('/movies',(req,res)=>{
//     res.send(JSON.stringify(movieData))
// })

// app.listen(2300)

// // http.createServer((req,res)=>{
// //     res.writeHead(500,{'Content_type':'application/json'})
// //     res.write(JSON.stringify(movieData))
// //     res.end()
// // }).listen(2300)


// let express = require('express');
// let app = express();
// const mongo = require('mongodb');
// const MongoClient = mongo.MongoClient;
// const mongoUrl = "mongodb+srv://test:root@cluster0.fsqmx.mongodb.net/movie-data?retryWrites=true&w=majority";

let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb+srv://test:root@cluster0.fsqmx.mongodb.net/movie-data?retryWrites=true&w=majority";
const dotenv = require('dotenv');
dotenv.config()

let port = process.env.PORT || 8210;
var db;

app.get('/',(req,res)=>{
    res.send('movie api')
})


// all movies listing
app.get('/movies',(req,res)=>{
    db.collection('movie-info').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.get('movie/:id',(req,res)=>{
    let movieId=Number(req.params.id)
    db.collection('movie-info').find({id:movieId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongoUrl, (err, client) => {
    if (err) console.log("Error While Connecting");
    db = client.db('movie-data');
    app.listen(port, () => {
        console.log(`listening on port no ${port}`)
    });
})


