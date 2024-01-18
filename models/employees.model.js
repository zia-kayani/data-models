import mongoose from mongoose;
const employeesSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            index:true,
            toLoweCase : true,
            trim:true
        }
})

export  default Employees = mongoose.Model("Employees", employeesSchema);