const express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const path = require("path");
//const bodyParser = require("body-parser"); No Longer Requierd
require("dotenv").config();


const homeRoutes = require("./routes/homeRoutes");
// const sessionRoutes = require("./routes/sessionRoutes");

// Decalring App
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

// For parsing url body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Sessions
// app.use(cookieParser());
// app.use(
//   session({
//     secret: "pYn.ZXa?tDIy!pM5*KK$",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(express.static(path.join(__dirname, "public")));
// Routes
app.use("/", homeRoutes);
// app.use("/", sessionRoutes);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//404
app.use((req, res) => {
  res.status(404).render("404");
});

// Listen on Environment Port or 3000

app.listen(port, () => console.log(`Listening on port ${port} \n goto http://localhost:3000/`));

