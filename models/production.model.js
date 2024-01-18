import mongoose from mongoose;
const productionSchema = new mongoose.Schema({
    employees :{
        type: mongoose.Schema.Types.ObjecId,
        ref:"employees"
    }

})

export  default Production = mongoose.Model("Production", productionSchema);