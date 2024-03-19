const mongoose = require('mongoose');



const MongoCo=()=>{
  mongoose.connect(
    process.env.Mongo_Url
  )



.then(()=>{
  console.log("Mongoose connected successfully")
})

.catch((err)=>{
    console.log("Connection Error:",err);
  })

}

module.exports=MongoCo;