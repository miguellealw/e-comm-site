/* eslint-disable */

if(process.env.NODE_ENV === "dev") {
  module.exports = require('./dev');
} else {
  console.log("TODO: setup keys for production")
}