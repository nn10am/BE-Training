require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/api')

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config file upload

const configViewEngine = require('./config/viewEngine');
const { connection } = require('./config/database');

const { default: mongoose } = require('mongoose');
// const fileUpload = require('express-fileupload')
// app.use(fileUpload());


// config template engine
configViewEngine(app)

// using req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Khai báo route
app.use("/v1/api/", apiRoutes)
; (async () => {
  try {
    await connection().then();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    })
  }
  catch (error) {
    console.log('hehe', error);
  }
})()




