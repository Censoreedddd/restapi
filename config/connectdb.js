const mongoose = require('mongoose')

const connectdb=async()=>{
    try{
await mongoose.connect('mongodb+srv://azizchikhi685:gunsyEbCDKrM2tMv@cluster0.8mco3.mongodb.net/?retryWrites=true&w=majority')
console.log('db is connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb