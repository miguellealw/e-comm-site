import bodyParser from 'body-parser';
import expressPlayground from "graphql-playground-middleware-express";
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors';
import session from 'express-session';
import keys from '../config/keys';
// import cookieParser from 'cookie-parser';

import resolvers from '../graphql/resolvers';
import typeDefs from '../graphql/schemas';
// import { decodeToken } from '../services/auth'

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// async function auth(req, res, next) {
//   try {
//     const token = req.headers.authorization;
//     if(token != null) {
//       const user = await decodeToken(token);
//       req.user = user;
//     } else {
//       req.user = null;
//     }

//     return next();
//   } catch (error) {
//     throw error;
//   }
// }

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true
}

export default app => {
  app.use(bodyParser.json());

  app.use(cors(corsOptions));

  app.use(session({
    name: "qid",
    secret: keys.SESSION_SECRET,
    resave: false,
    // true - assigns cookie even when cookies hasn't changed
    // false - assigns the cookie when it has changed (when userId is stored in cookie)
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      // TODO test this later with fetch options in frontend
      // credentials: 'include'
    }
  }));
  // app.use(auth);

  // The GraphQL endpoint
  app.use(
    '/graphql', 
    bodyParser.json(), 
    (req, _, next) => {
      console.log('session', req.session);
      return next();
    },  
    graphqlExpress((req, res) => ({
      schema,
      context: {
        // user: req.user
        userId: req.session.userId,
        res,
        req
      }
    }))
  );

  app.get("/playground", expressPlayground({
    endpoint: "/graphql",
  }));

  // GraphiQL, a visual editor for queries
  // app.use('/graphiql', graphiqlExpress({
  //   endpointURL: '/graphql'
  // }));
}