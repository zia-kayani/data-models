import mongoose from mongoose;
const adminSchema = new mongoose.Schema({
    employees :{
        type: mongoose.Schema.Types.ObjecId,
        ref:"employees"
    }

})

export  default Admin = mongoose.Model("Admin", adminSchema);