import mongoose from "mongoose";
import keys from "./keys";

mongoose.set('debug', true);

try {
  /* Mongoose Connection */
  mongoose.connect(keys.DB_URL);
} catch (err) {
  mongoose.createConnection(keys.DB_URL);
}

const db = mongoose.connection;
db
  .on("error", err => {
    throw err;
  })
  .once("open", () => { console.log(`MongoDB Running`); });
