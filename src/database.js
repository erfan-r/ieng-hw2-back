let mongoose = require('mongoose')

const server_address = '127.0.0.1:27017'
const database_name = 'ieng_final'
const uri = "mongodb+srv://erfan:O7zgccoNLR5zgqKg@iengfinalproject-u0cyc.mongodb.net/test?retryWrites=true&w=majority";

class Database {
    constructor() {
        this._connect()
    }

    // mongoose.connect(`mongodb://${server_address}/${database_name}`, { useNewUrlParser: true, useUnifiedTopology: true})

    _connect() {
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
            //     mongoose.connect(`mongodb://${server_address}/${database_name}`, { useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log('Database connection made.')
            })
            .catch(err => {
                console.error('Database connection refused.')
                console.log(err.reason)
            })
    }
}

module.exports = new Database()
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   mongoose.
//   // perform actions on the collection object
//   client.close();
// });
