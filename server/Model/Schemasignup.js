import {Schema , model} from 'mongoose'

const signupSchema = new Schema(
{ 
    Fname:{
        type:String ,
        required:true
    },
    Lname:{
        type:String ,
        required:true
    },
    // type:{
    //     type:String ,
    //     required:true
    // },
    address:{
        type:String ,
        required:true
    },
    username:{
        type:String ,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}
)

const Signup = model("Signup" , signupSchema)

export default Signup;