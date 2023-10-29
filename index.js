const express = require("express");
const app = express();
const http = require("http")

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/pages/works.html")
})
    
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/pages/blog.html")
})

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/pages/404.html');
});


app.listen(() => {
    console.log("Сервер запущен: http://john-portfolio-two.vercel.app")
})