import express from "express"
import{dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const dir_name = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

var brandname = "";

const brandnamegenerator = (req,res,next) => {
  brandname = req.body["street"] + req.body["pet"];
  next()
}

app.use(brandnamegenerator);

app.get("/", (req,res)=>{
  res.sendFile(dir_name + "/public/index.html")
})

app.post("/submit", (req,res)=>{
  res.send(`<h1> Your Brand Name Is : <br> ${brandname}</h1>`)
})

app.listen(port, ()=>{
  console.log(`Your port is running at ${port}`);
})
