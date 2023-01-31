const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
{
    name:{
        type:String
    },
    lastname:{
        type:String
    },
    personal_phone:{
        type:String
    },
    company_phone:{
        type:String
    },
    email:{
        type:String
    },
    image:{
        type:String
    }
},
{
    timestamps:true,
    versionKey: false
}
)

module.exports = mongoose.model("contact", contactSchema)