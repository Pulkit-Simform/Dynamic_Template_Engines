const express = require("express");
const path = require("path");
const indexRoutes = require("./routes/index");

const app = express();

//Set view engine name and template directory path
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/",indexRoutes);



app.listen(3000 || process.env.PORT, () => {
    console.log("Server started listening");
});