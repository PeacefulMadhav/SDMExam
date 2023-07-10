--node;
const express = require("express");
const { request } = require("http");
const send = require("send");
const cors = require("cors");

const app = express();

app.use(cors("*"));

app.get("/", (request, response) => {
  response.send("Hiiiiiiiiiiiiiiiiiiiiiiiiii");
});

app.post("/", (request, response) => {
  response.send("Hiiiiiiiiiiiiiiiiiiiiiiiiii");
});

app.push("/", (request, response) => {
  response.send("Hiiiiiiiiiiiiiiiiiiiiiiiiii");
});

app.delete("/", (request, response) => {
  response.send("Hiiiiiiiiiiiiiiiiiiiiiiiiii");
});

app.listen(3001, "0.0.0.0", () => {
  console.log("server started at port no 3001");
});
