var mangoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'], // alphanumerical regex
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'], // email regex
    index: true
  },
  bio: String,
  image: String,
  hash: String,
  salt: String,
}, {timestamp: true});

mongoose.model('User', UserSchema);
