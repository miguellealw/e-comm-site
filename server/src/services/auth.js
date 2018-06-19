import jwt from 'jsonwebtoken';

import constants from '../config/keys';
     import User from '../models/User';

export async function requireAuth(userId) {
  if(!userId) throw new Error('Unauthorized');
  const currentUser = await User.findById(userId);
  if(!currentUser) throw new Error('Unauthorized');
  return currentUser;
}

export function decodeToken(token) {
  const arr = token.split(' ');

  if (arr[0] === 'Bearer') {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error('token is not valid')
}