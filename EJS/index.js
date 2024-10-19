import express from "express"

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.render("index.ejs",{
        dayName : "Monday",
        advice : "Back To The Office !"
    })
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})