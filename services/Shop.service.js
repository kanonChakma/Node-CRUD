//database operation in service  
const Shop=require('../models/Shop.model');

module.exports.create=(shop)=>{
    return Shop.create(shop);
}

module.exports.getAll=()=>{
 return Shop.find();
}
module.exports.getById=(id)=>{
    console.log(id);
  return Shop.findById(id);
}

module.exports.updateById=(id)=>{
    console.log(id);
    return Shop.findByIdAndUpdate(
        id,
        {$set:{name:"mrinal kanti"}},
        {new:true}
    )
}
module.exports.deleteById=(id)=>{
    return Shop.findByIdAndRemove(id);
}

