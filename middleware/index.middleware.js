const ValidateLoginField = require('./validations/login.validate');
const ValidateRegisterField = require('./validations/register.middleware');
const ProtectedRoute = require('./protectedRoute/protectedRoute.middleware');
const ValidatePostField = require('./validations/post.validate');
const ValidateCommentPostField = require('./validations/commentPost.validate');
module.exports = {
  ValidateLoginField,
  ValidateRegisterField,
  ProtectedRoute,
  ValidatePostField,
  ValidateCommentPostField,
}