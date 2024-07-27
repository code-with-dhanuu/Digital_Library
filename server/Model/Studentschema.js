import {Schema , model} from 'mongoose'

const studentSchema = new Schema(
    {
        sname:{
            type:String,
            required:true
        },
        memberno:{
            type:String,
            required:true
        },
        department:{
            type:String,
            required:true
        },
        semister:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
       },
       contact:{
        type:String,
        required:true
       }
    }
)

const Student = model ("Student" , studentSchema)

export default Student;