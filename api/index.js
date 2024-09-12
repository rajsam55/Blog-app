import express from "express"
import db from   "./db.js"
const blogRouter = require("./route")





const app = express()

app.use(express.json())
app.use("/api/blogs", blogRouter)




db.connect((err)=>{

    if(err)console.error(err)
    console.log("mysql connection estalished")



})

app.get("/", (req,res)=>{
    res.json("hello there")

    })



app.get("/books", (req,res)=>{
        const q = " SELECT * FROM books"
         db.query(q,(err,data)=>{
     
             if(err)
             return res.json(err)
             return res.json(data)
     
     
         })

        })
            

        
    






app.listen(8800, ()=>{

    console.log("connected to db")
}



)
