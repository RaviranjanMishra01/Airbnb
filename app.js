// Core Module
const path = require('path'); 

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const authRouter = require("./routes/authRouter")
// const { mongoConnect } = require("./utils/databaseUtil");
const {default : mongoose} = require("mongoose")
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use(authRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);


const DB_PATH = "mongodb+srv://raviranjan_db_user:Ravi%401234@ravijii.w9f5nbh.mongodb.net/airbnb?retryWrites=true&w=majority"

mongoose.connect(DB_PATH).then(()=>{
  console.log("Connected to Mongo");
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch((err)=>{console.log("connection failed ",err)})