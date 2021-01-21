const shopService=require('../services/Shop.service');

module.exports.create=async(req,res,next)=>{
    try{
        const shop=await shopService.create(req.body);
        return res.status(200).json(shop);
    }catch(err){
        console.log(err);
        return res.status(500).json({message:'something went wrong'});
    }
}

module.exports.getAll=async(req, res, next)=>{
    try{
        const data = await shopService.getAll();
        return res.status(200).json(data); 
     }catch(err){
         return res.status(500).json({message:'Something went wrong'});
     }
}

module.exports.getById=async(req, res, next)=>{
    try{
        const getData=await shopService.getById(req.params.id);
        return res.status(200).json(getData);
    }catch(err){
        return res.status(500).json({message:'Searching by id is not found'});
    }
}

module.exports.deleteById=async(req, res, next)=>{
    try{
        const data=await shopService.deleteById(req.params.id);
        return res.status(200).json({message:'data are deleteted successfully'}); 

    }catch(err){
        return res.status(500).json({message:'data canont be delete'});
    }
}

module.exports.updateById=async(req, res, next)=>{
    try{
        const data = await shopService.updateById(req.params.id);
        return res.status(200).json(data);
    }catch(err){
        return res.status(500).json({error: err});
    }
}
