const express = require('express');
const con = require("./config");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    con.query("select * from user", (err, result) => {
        if (err) {
            res.send("error")
        }
        else {
            res.send(result)
        }
    })
});

app.post("/",(req,res)=>{
  const data = {name:"narayan",email:"narayan@gmail.com",number:"1236547890"};
  con.query('Insert INTO user SET ?' , data , (error, result,fields)=>{
    if(error) error;
    res.send(result)

  })
});

app.put("/:id",(req,res)=>{
    const data =[req.body.name,req.body.email,req.body.number,req.params.id];
    con.query("UPDATE user SET name = ?, number = ? where id = ?" , data,(error,result,fields)=>{
        if(error) error;
        res.send(result)
     });

    })
    



app.listen(5000);
