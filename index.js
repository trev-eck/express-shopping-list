const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

const items = ["bacon"];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
    //res.send("welcome!");
})

app.get("/api/items", (req, res) => {
    res.json(items);
})

app.post("/api/items", (req, res) => {
    console.log(req.body.item);
    items.push(req.body.item);
    res.send(req.body.item);
})

app.delete("/api/items", (req, res) => {
    items=[];
    res.send("list cleared");
})

app.listen(PORT, () =>{
    console.log("Listening on port " + PORT);
});