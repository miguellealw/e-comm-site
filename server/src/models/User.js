import mongoose, { Schema } from 'mongoose'
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import constants from '../config/keys';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  avatar: String,
  password: String,
}, {timestamps: true})

UserSchema.pre('save', function preHashPassword(next) {
  // Will hash password only if password is changed
  if(this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password)
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      { _id: this._id }, 
      constants.JWT_SECRET, 
      { expiresIn: "7d" }
    )
  }
}

export default mongoose.model('User', UserSchema);