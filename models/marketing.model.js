import mongoose from mongoose;
const marketingSchema = new mongoose.Schema({
    employees :{
        type: mongoose.Schema.Types.ObjecId,
        ref:"employees"
    }

})

export  default Marketing = mongoose.Model("Marketing", marketingSchema);