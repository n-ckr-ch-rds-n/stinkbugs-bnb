const mongoose = require('mongoose')
require('mongoose-type-email');
var bcrypt = require('bcrypt');


let UserSchema = new mongoose.Schema({
    user_name: {
    	type: String,
    	required: true,
    	minlength: 1,
    	maxlength: 50
    	},

    email_address: {
    	type: mongoose.SchemaTypes.Email,
    	required: true
    },

    password: {
      type: String,
      required: true,
      minlength: 8
    }

  });

UserSchema.methods.generateHash = function(password) {
 return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//
// UserSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// })

var User = mongoose.model('User', UserSchema);
module.exports = User;
