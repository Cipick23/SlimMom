import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter',
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: null,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
});

const User = model('User', schema);

export default User;

// {
//   "_id": {
//     "$oid": "6675b2c325cdbdf5daaf4be7"
//   },
//   "password": "$2b$10$8ZTe83a9Fe1ffX.MW11sten6lYSTBDFbcXZSy6CtRpKHD8NDyD2uy",
//   "email": "tzutzuthekid@gmail.com",
//   "token": null,
//   "verificationToken": "eeae0089-deba-445f-b921-0e8cd633e42e",
//   "__v": 0
// }
