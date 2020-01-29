let mongoose = require('mongoose')

const server_address = '127.0.0.1:30000'
const database_name = 'ieng_final'

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${server_address}/${database_name}`, { useNewUrlParser: true})
            .then(() => {
                console.log('Database connection made.')
            })
            .catch(err => {
                console.error('Database connection refused.')
            })
    }
}

module.exports = new Database()