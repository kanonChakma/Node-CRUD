const express = require('express');
const router=express.Router();

const shopController=require('../controllers/Shop.controller');

router.post('/',shopController.create);
router.get('/get',shopController.getAll);
router.get('/get/:id',shopController.getById);
router.delete('/:id',shopController.deleteById);
router.patch('/:id',shopController.updateById);

module.exports=router;