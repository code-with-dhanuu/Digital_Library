import {Schema , model} from 'mongoose'

const issueSchema = new Schema(
     // issue book

    {
        member:{
            type:String,
            // required:true
        },
        student:{
            type:String,
            // required:true
        },
        ibookname:{
            type:String,
            required:true
        },
        ibookday :{
            type:String,
            required:true
        },
        ibookdate:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
    //     ibookreturn:{
    //             type:String,
    //             required:true
    //    }
        //  ,
        // fine:{
        //         type:String,
        //         required:true
        // }
       
    
    }
)

const Issue = model("Issue" ,issueSchema )

export default Issue;