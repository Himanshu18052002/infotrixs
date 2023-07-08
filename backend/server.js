const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

const routes = require("./routes/ToDoRoutes")
app.use(routes);

require('dotenv').config();
const PORT = process.env.port || 5000;

mongoose
.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log(`Connected to MongoDB....`))
.catch((err)=>console.log(err))



app.listen(PORT , ()=> console.log(`server is running on ${PORT}`));