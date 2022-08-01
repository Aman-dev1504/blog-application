const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/post");
const CategoryRoute = require("./routes/categories");
const multer= require("multer");

dotenv.config();

app.use(express.json() );
mongoose.connect(process.env.Mongo_URL,
{useNewUrlParser:true,
useUnifiedTopology:true,
}).then(console.log("Connected to database"))
 .catch((err) => console.log(err)) ;

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    }, filename:(req,file,cb)=> {
        cb(null, "req.body.name")
    },
});

const upload= multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploded...hurray!")
})

 app.use("/api/auth",authRoute);
 app.use("/api/users",userRoute);
 app.use("/api/post",postRoute);
 app.use("/api/categories",CategoryRoute);



app.listen("5000",() => {
    console.log("Backend is up and running....")
});
