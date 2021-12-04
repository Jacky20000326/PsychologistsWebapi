const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3004;
// const bodyParser = require('body-parser');
const EmailRoute = require("./route/emailRoute");
const cors = require("cors");


// connect mongo altas
mongoose.connect("mongodb+srv://jackydb:ByisiTAoSpawtmz4@cluster0.2do2q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { 
    useUnifiedTopology: true,
    useNewUrlParser: true, 
}).then(()=>{
    console.log("success to connect to mongodb atlas")
}).catch((err)=>{
    console.log(err)
})

// middleware
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api/Info",EmailRoute)






app.listen(port,()=>{
    console.log(`It's port ${port}`)
});

