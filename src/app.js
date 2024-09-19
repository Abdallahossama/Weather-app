const path = require("path");
const express = require("express");
const hbs = require("hbs");
const getTempreture = require("./utils/temp");

const app = express();
// general express
app.set("views", path.join(__dirname, "../templates/views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../templates/partials"));
// general express
app.use(express.static(path.join(__dirname, "../public/")));

app.get("", (req, res) => {
  res.render("index", {
    title: "Egypt Weather",
    name: "Abdallah Ossama",
    address: "",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Abdallah Ossama",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    help: "Help Page",
    name: "Abdallah Ossama",
  });
});
//30.0444,31.2357
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("<h1>Weather</h1>");
  }
  // res.send(`<h1>${req.query.address}</h1>`);
  getTempreture(
    "https://api.weatherstack.com/current?access_key=f91f26a1e42d8dfe2887694225ab88da&query=address" +
      req.query.address,
    (error, response) => {
      if (error) {
        res.send({
          error: "No address in here",
        });
      } else {
        res.send({
          forcast: response,
        });
      }
    }
  );
});

app.get("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen("https://abdallahossama.github.io/", () => {
  console.log("Server is up on port http://localhost:3000/.");
});
//anfn
