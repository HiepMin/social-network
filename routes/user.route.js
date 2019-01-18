const express = require('express');
const router = express.Router();
// loading middleware
const {  
  ValidateLoginField,
  ValidateRegisterField,
  ProtectedRoute
} = require('./../middleware/index.middleware');
// loading controller
const { 
  Post_Login,
  Post_Register,
  Get_CurrentUser,
  Get_UserById
} = require('./../controllers/index.controller');

router.post('/login', ValidateLoginField, Post_Login);
router.post('/register', ValidateRegisterField, Post_Register);
router.get('/current', ProtectedRoute, Get_CurrentUser);
router.get('/id=:user_id',ProtectedRoute, Get_UserById);

module.exports = router;