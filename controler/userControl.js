const userDB = require("../modules/userShema");


const userCreate=async (req,res)=>{
    try{
        const data=await user.find();
        res.json({
            data:data,
        })
    }
    catch(error){
        res.json({
            message:error.message,
        })
    }
}
module.exports=userCreate;

