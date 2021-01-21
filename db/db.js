const mongoose = require('mongoose');
const dbUrl=process.env.MONGO_URL;

if(!dbUrl){
   console.error('mongo url not set in env file');
   return new Error('mongo url not set in env file');
}
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology: true,
},err=>{
    if(err)
    {
      console.log(`failed to connect using mongoose ${err}`)
    }
    else{
        console.log('connected successfully');
    }
})
module.exports=mongoose;
