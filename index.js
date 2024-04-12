const express = require("express");

const app = express();
const porta = 3002;

const router = require('./src/router/router');
const { getformulario } = require("./src/controller/locationController");

app.set("view engine", "ejs");
app.set("views", "src/view");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use("/", router);

app.listen(porta, () => {
  console.log(`Servidor executado! http://localhost:${porta}`);
});

