const express = require("express");
const path = require("path");
const chalk = require("ansi-colors");
const bodyParser = require("body-parser");

/** Routing Imports */
const indexRoutes = require("./routes/index");
const galleryRoutes = require("./routes/gallery");

/** Initialization */
const port = 3000 | process.env.PORT;
const app = express();

/** Element parsing from the arguments */
const elem = process.argv.pop();
/** Object for settling view engine based on argument */
const obj = {
    1:"pug",
    2:"handlebars",
    3:"ejs"
}

/**
 * * setting template based on arguments
 * @param {*} elem 
 */
function parsingTemplate(elem){
    app.set("view engine",obj[elem]);
    app.set("views", path.join(__dirname, `views/${obj[elem]}`));
}

//Set view engine name and template directory path
if(elem > 0 && elem<4) parsingTemplate(elem); 
else{
    console.log(chalk.blue("1). Pug"))
    console.log(chalk.blue("2). Handlebars"))
    console.log(chalk.blue("3). EJS"))
    console.log(chalk.red("Please Select Above options")+"\n")        
    console.log(chalk.bold.underline.yellow("e.g. node app.js [1,2,3]"));
    console.log(chalk.black("---------------------------"));
    process.exit(0);
}

/** Normal Middleware */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/** For Routing */
app.use("/",indexRoutes);
app.use("/gallery",galleryRoutes);

/**
 * * For Server;
 */
app.listen(port, () => {
    console.log(chalk.bold.italic.green(`Serving ${obj[elem]} template on port ${port}`));
});