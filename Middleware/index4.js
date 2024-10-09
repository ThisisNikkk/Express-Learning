import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express ();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
var brandName = "";

function brandNameGenerator(req,res,next){
  console.log(req.body);
  brandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(brandNameGenerator);

app.get("/", (req,res)=>{
  res.sendFile(_dirname + "/public/index.html")
});

app.post("/submit", (req,res)=>{
  res.send(`<h1>Your Brand Name is : ${brandName}</h1>`);
});


app.listen(port, (req,res)=>{
  console.log("Server is running")
});
