import express from "express"
import data from "./data/data.json" assert {type:"json"}

const app = express()
const PORT = 3000
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello World")
})


app.get("/numbers", (req, res)=>{
    res.send("3000")
})

app.post("/fruits", (req, res)=>{
    console.log(req.body);
    res.send("Data saved successfully")
})


app.get("/users", (req, res)=>{
    res.send("TB0Y")
})

app.get("/ab?cd",(req, res)=>{
    res.send("path for ab?cd")
})


app.get("/ab*cd",(req, res)=>{
    res.send("tell me my name")
})




// app.get("/fruits",(req, res)=>{
//     res.send(data)
// })


app.get("/fruits/:fruitName?",(req, res)=>{
    const { fruitName } = req.params
    if (fruitName) {
        const fruit = data.find((f) => f.name === fruitName)
        if(!fruit) {
            res.status(404).send("Fruit not found")
        }
        res.status(200).send(fruit)
    }
    else if(!fruitName) {
        res.status(200).send(data)
    }
})

app.post("/fruits/:id", (req, res)=>{

})

app.get("/users/:name", (req, res)=>{
    if (req.params.name.length <= 1)
        res.status(400).send(`<h1> 404 NOT FOUND </h1>`);

    res.status(200)
    res.set(`Content-Type`, `text/html`)
    res.send(`<html>
        <body>
        <h1 style = 'color:Red'>Hello ${req.params.name}</h1>
        </body>
        </html>` 
    )
})




app.listen(PORT, ()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})