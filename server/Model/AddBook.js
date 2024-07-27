import {Schema , model} from 'mongoose'

const AddbookSchema = new Schema(
   
    // Add books
    { 
        // Bookid:{
        //     type:String,
        //     required:true
        // },

        Bookname:{
            type:String,
            required:true
        },
        // gerne
        Category:{
            type:String,
            required:true
        },
        Quantity:{
            type:String,
            required:true
        },
        Price:{
            type:String,
            required:true
        },
        Author:{
            type:String,
            required:true
        },
        // Year:{
        //     type:String,
        //     required:true
        // }
    },

  

    // Requestbook
    {
        Username:{
            type:String,
            required:true
        },
        Usertype:{
            type:String,
            required:true
        }
    }
)

const Addbook = model("Addbook" ,AddbookSchema )
export default Addbook;