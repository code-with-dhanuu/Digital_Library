import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Signup from './Model/Schemasignup.js';
import Addbook from './Model/AddBook.js';
import Issue from './Model/BookIssue.js'
import Student from './Model/Studentschema.js';




const app =express();
app.use(express.json());
app.use(cors());

const PORT = 4000;

const Database =async()=>{
await mongoose.connect("mongodb+srv://bhoyatedhanashree:pAGWf0rdgP7v7soD@cluster0.tkmvcuk.mongodb.net/Library")
console.log("DATABASE CONNECTED")
}
Database();

app.listen(PORT , ()=>{
    console.log("SERVER IS RUNNING ON" , PORT)
})

// Signup or register

app.post('/signup' , async(req , res)=>{
    try{
    const {Fname , Lname , address , username , Email , password}= req.body;
    const postdata = await Signup.create({
        "Fname":Fname,
        "Lname":Lname,
        "address":address,
      "username":username,
      "Email":Email,
      "password":password
    })

    res.json({
        Success:true,
        data:postdata,
        msg:"You are Signup Successfully"
    })
}catch(error){
res.json({
    Success:false,
    msg:error.msg
     // console.log(error)
})

}
})

// userdata

app.get('/userdata' ,async (req , res)=>{
    try{

    const alldata = await Signup.find()
    res.json({
        Success:true,
        data:alldata,
        msg:"All Signup Members data stored here"
    })
}catch(error){
    res.json({
        Success:false,
        msg:error.msg
         // console.log(error)
    })
}
})


app.delete('/userdata/:_id', async (req, res) => {

    try {
        const {username}= req.body;
        const { _id } = req.params;
        const deluser = await Signup.deleteOne({ _id: _id });
        res.json({
            Success: true,
            _id: _id,
            data: deluser,
            msg: `${username}User data deleted sucessfully `
        })

    } catch (error) {
        console.log(error)
    }
})

// Login

app.post('/login' , async(req , res)=>{
    const {Email , password} = req.body; 
    
    
    const logindata = await Signup.findOne({
        Email:Email ,
        password:password
    })
    if(logindata){
      
        res.json({
            Success:true,
          msg:"Login succesfully"
       }); 
      }


      else{
        res.json({
           Success:false,
           msg:"You didn't have an account"
       });
      }
})

// Add books from admin page

app.post('/abook' , (req , res)=>{

    try{
    const {Bookname , Author , Category ,Price, Quantity}= req.body;
    const {id}= req.params;
    // const id =Math.floor(Math.random()*100);
    const AddBooks = Addbook.create({
        "Bookid":id,
        "Bookname":Bookname,
        "Author":Author,
        "Category":Category,
        // "Year":Year,
        "Price":Price,
        "Quantity":Quantity
    })

    res.json({
        Success:true,
        Abook:AddBooks,
        msg:`${Bookname} was added Successfully`
    })
}catch(error){
    res.json({
        Success: false,
        msg: error.message
    })
}
})

// Show on student page books added
app.get('/abooks' , async(req , res)=>{
    try{
        const {Bookname}= req.body;
        const Allbooks = await Addbook.find();
        res.json({
            Success:true,
            data:Allbooks,
            msg:`${Bookname} This book is saved`
        })
    }catch(error){
        res.json({
            Success: false,
            msg: error.message
        })
    }
})

app.delete('/abook/:_id', async (req, res) => {

    try {
        const {Bookname}= req.body;
        const { _id } = req.params;
        const delbook = await Addbook.deleteOne({ _id: _id });
        res.json({
            Success: true,
            _id: _id,
            data: delbook,
            msg: `${Bookname}Book was deleted sucessfully `
        })

    } catch (error) {
        console.log(error)
    }
})

app.post('/ibook' , async(req , res)=>{
    try{
    const { student,member,category, ibookname , ibookday , ibookdate }=req.body;

    const Bookissue = Issue.create({
        "student":student,
        "member":member,
        "category":category,
        "ibookname" : ibookname,
        "ibookday" : ibookday,
        "ibookdate" : ibookdate,
        // "ibookreturn" : ibookreturn

    })

    res.json({
        Success:true,
        data:Bookissue
        // msg:
    })

} catch(err){
   res.json({
    Success:false,
    msg:err.message

   })
}
}
)

app.get('/ibooks' , async(req , res)=>{
    try{
        const {  ibookname }=req.body;
        const Allibooks = await Issue.find();
        res.json({
            Success:true,
            data:Allibooks,
            msg:`${ibookname} Issue Book record saved `
            })


    }catch(err){
        res.json({
            Success:false,
            msg:err.message
        })
    }
})

app.delete('/ibook/:_id', async (req, res) => {

    try {
        const {ibookname}= req.body;
        const { _id } = req.params;
        const deldataa = await Issue.deleteOne({ _id: _id });
        res.json({
            Success: true,
            _id: _id,
            data: deldataa,
            msg: `${ibookname}Book was deleted sucessfully `
        })

    } catch (error) {
        console.log(error)
    }
})



app.post('/addstud' , async(req , res)=>{
    try{
        const {sname ,memberno ,department, semister,email ,contact}=req.body;

        const Addstudent = await Student.create({
            "sname":sname,
            "memberno":memberno,
            "department":department,
            "semister":semister,
            "email":email,
            "contact":contact
        })

        res.json({
            Sucess:true,
            data:Addstudent,
            msg:`${sname} Student details was added`
        })
    }catch(err){
        res.json({
            Success:false,
            msg:err.message
        })
    }
})


app.get('/Students' , async(req , res)=>{
    try{
        const {sname }=req.body;
        const Allstudent = await Student.find();
        res.json({
            Success:true,
            data:Allstudent,
            msg:`${sname} Issue Book record saved `
            })


    }catch(err){
        res.json({
            Success:false,
            msg:err.message
        })
    }
})

app.delete('/addstudent/:_id', async (req, res) => {

    try {
        const {sname}= req.body;
        const { _id } = req.params;
        const delstudent = await Student.deleteOne({ _id: _id });
        res.json({
            Success: true,
            _id: _id,
            data: delstudent,
            msg: `${sname}Student details deleted sucessfully `
        })

    } catch (error) {
        console.log(error)
    }
})
