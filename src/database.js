import config from './config';
import mongoose from 'mongoose';
const { MongoClient, ServerApiVersion } = require('mongodb');

const con=()=>{
    const uri = config.mongodbURL;
    const db = new MongoClient(uri, 
        {useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1 });
    db.connect(err => {
        const collection = db.db("app").collection("tasks");
        // perform actions on the collection object
        db.close();
          });
    console.log("db is connected")
}

const conection= async ()=>{
    const uri= "mongodb+srv://mirco874:60109868Mirco@store.r28nk5s.mongodb.net/?retryWrites=true&w=majority" || config.mongodbURL;
    const db= await mongoose.connect(uri,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    console.log("database is connected",db.connection.name)
}
conection();





