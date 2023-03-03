const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route=require("../src/routes/route.js");
const cors=require('cors');

let app = express();

app.use(bodyParser.json());
app.use (cors());
mongoose.connect("mongodb+srv://bloging:Ru3T8OfOTxxCxivv@cluster0.rqgvyl5.mongodb.net/Blog?retryWrites=true&w=majority",{
    useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => {
    console.log(" MongoDB is connected");
}).catch((err)=>{
    console.log(err.message)
})

app.use("/",route);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})