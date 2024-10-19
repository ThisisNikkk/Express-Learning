import express from "express"

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    const today = new Date();
    const day = today.getDay();

    let type = "WeekDays"
    let adv = "Office Chala Ja"

    if(day === 0 || day ===6){
        type = "WeekEnd"
        adv = "Chill Kar Bhai !!"
    }

    res.render("index.ejs",{
        dayName : type,
        advice : adv,
    })
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})