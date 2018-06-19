/* eslint-disable no-console */
import express from 'express';
import "./config/db";
// import mocks from './mocks';
import middleware from './config/middleware';
// Initialize the app
const app = express();

const PORT = process.env.PORT || 5000;

middleware(app);

// mocks().then(() => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
  });
// })