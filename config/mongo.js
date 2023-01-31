const mongoose = require('mongoose')
      mongoose.set('strictQuery', true)
      
const dbConnect = () => {
    const DB_URI = process.env['DB_URI']
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },(err, response)=>{
        if(!err){
            console.log('connected')
        }else{
            console.log('error')
        }
    })
}

module.exports = dbConnect