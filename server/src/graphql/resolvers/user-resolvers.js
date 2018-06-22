import User from '../../models/User';
import { requireAuth } from '../../services/auth';

export default {
  signup: async (_, { fullName, ...rest }, { req }) => {
    try {
      const [firstName, ...lastName] = fullName.split(' ');
      const user = await User.create({ firstName, lastName, ...rest});
      // const token = user.createToken();
      
      // Assign the user id to the session
      req.session.userId = user.id;

      // Send token in cookie
      // res.cookie("id", token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "product",
      //   maxAge: 1000 * 60 * 60 * 24 * 7 // 7 Days
      // })
  
      return true
    } catch (error) {
      throw error;
    }
  },

  login: async (_, { email, password }, { req }) => {
    try {
      const user = await User.findOne({ email });
      if(!user) {
        // return new Error('User does not exist');
        return false;
      }
  
      if (!user.authenticateUser(password)) {
        // return new Error('Incorrect Password');
        return false;
      }

      req.session.userId = user.id;
  
      return true
    } catch (error) {
      throw error;
    }
  },

  logout: (_, args, { req, res }) => {
    req.session.destroy()
    
    // Clear the cookie in the client
    res.clearCookie('qid', { path: '/' })
    return true;
  },

  currentUser: async (_, args, { userId }) => {
    try {
      const currentUser = await requireAuth(userId);
      return currentUser
    } catch (error) {
      throw error;
    }
  }
}