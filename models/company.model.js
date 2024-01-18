import mongoose from mongoose;
const companySchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        index:true,
    },
    logo:{
        type:String,
    },
    description:{
        type:String,
        trim:true,
    },
    deparments:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:"admin"
        },
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:"marketing"
        },
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:"production"
        },

    ]

})

export  default Company = mongoose.Model("Company", companySchema);