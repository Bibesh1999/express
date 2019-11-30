const express = require('express');
const router = express.Router();
const {getAllUsers,getuser,createUser,deleteuser,updateuser} = require('./../controllers/userController');



router 
.route('/')
.get(getAllUsers)
.post(createUser);

router 
.route('/:id')
.get(getuser)
.patch(updateuser)
    .delete(deleteuser); 

module.exports = router;