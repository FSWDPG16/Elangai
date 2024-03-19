const express = require('express');
// const mongoose=require('mongoose');
const app = express();
const MongoCo=require('./common/Connection');
const userDB=require('./modules/userShema')
app.use(express.json());
const  router=require('./router/routes');
require('dotenv').config();

MongoCo()
app.use(router);
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });


// const MongoUrl="mongodb+srv://elangaivendhan24:1vtNYbZ7tYv8rAAQ@cluster0.0fzp4ln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const MongoUrl="mongodb+srv://krishna43835:8DUBpl74kBIyidDY@cluster0.0lubpbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const MongoUrl="mongodb+srv://krishna43835:8DUBpl74kBIyidDY@cluster0.0lubpbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// mongoose.connect(MongoUrl)
// .then(()=>{
//   console.log("Mongoose connected successfully")
// })


// .catch((err)=>{
//   console.log("Connection Error:",err);
// })

// app.post("/post", async (req, res) => {
//   try {
//     const { username } = req.body;

    
//     res.json({
//       message: ` user name - ${username}`,
//     });
//   } catch (error) {
//     res.json({
//       error: error.message,
//     });
//     }
//   });


// const user = new mongoose.Schema({
//   userName : {
//     type : String
//   },
// })

// const userDB = mongoose.model('Elangaivendhan',user)

// app.post("/post", async (req,res)=>{
//   try{
//     const {userName} = req.body;
//     const moon = new userDB({userName});
//     await moon.save()
//     res.json({

//       data: userName
//     })
//   }
//   catch(error1){
//     res.json({
//       message:error1.message,
//     })
//   }
  
// })

// const userDB = mongoose.model('Elangaivendhan',user)

// app.post("/post", async (req,res)=>{
//   try{
//     const {userName,age,DOB,Location} = req.body;
//     const moon = new userDB({userName,age,DOB,Location});
//     await moon.save()
//     res.json({
//       userName: userName,
//       age: age,
//       DOB:DOB,
//       Location:Location,
//       id: moon._id,
//       version:moon.__v


//     })
//   }
//   catch(error1){
//     res.json({
//       message:error1.message,
//     })
//   }
  
// })


// app.get("/get",async(req,res)=>{
//   try{
//     const getData=await userDB.find();
//     res.json({
//       data:getData,
//         });
//   }

// })



// const user =new mongoose.Schema({
//   userName :{
//   type :String,
// }
// });


// const userDB=mongoose.model('users',user);

// ``



// app.post('/post',(req,res)=>{
//   try{
//     const {userName}=req.body;
//     res.json({
//       data:userName
//     })
//   } catch (error){
//     res.json({
//       message:error.message
//     })
//   }
// })




// app.use('/king',(req,res)=>{
//   res.send("I am King Kohli");
// })

// const data=[
//   {
//     "name":"Elngaivendhan",
//     "DOB":"24-12-2003",
//     "age":"21"
//   }
// ]

// app.get('/student',(req,res)=>{
//   res.send(data);
// })

// app.post('/data',(req,res)=>{
//   const {name} =req.body;
//   res.json({
//     data:name
//   })
// })

// app.get('/submit',(req,res)=>{
//   try{
//     res.send(data);
//   }
//   catch
// })






const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http:",PORT)//localhost:${PORT});
});