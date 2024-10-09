import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));
var authorizedUser = false;
app.use(bodyParser.urlencoded({extended:true}));

function verifPass(req,res,next){
    const pass = req.body["password"];
    if(pass === "ILoveProgramming") {
        authorizedUser = true;
        console.log("User is Verified!");
    }
    next();
}

app.use(verifPass);

app.get("/", (req,res)=>{
    res.sendFile(_dirname + "/public/index.html");
})

app.post("/user",(req,res)=>{
    if(authorizedUser){
        res.sendFile(_dirname + "/public/secret.html");
    }
    else{
        res.sendFile(_dirname + "/public/index.html");
    }
})

app.listen(port, (req,res)=>{
    console.log("Server is running!!");
})