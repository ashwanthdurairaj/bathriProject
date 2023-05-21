const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(conn)
} catch (error) {
    console.log(error)
    process.exit(1)
  }
}
connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use('/', require('./routes'))

app.listen(port, (req, res) => {
    console.log("server running at port 5000")
})