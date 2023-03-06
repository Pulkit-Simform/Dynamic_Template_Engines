const express = require("express");
const { render } = require("pug");
const router = express.Router();

const feedBackArray = [];

/** For Dynamic Content */
const renderingOptions = {
    title:"index",
    feedback:feedBackArray
}

router.get("/",(req,res) => {
    res.render("index",renderingOptions);
})

router.post("/",(req,res) => {
    const { name,email,message } = req.body;
    feedBackArray.push({name,email,message});
    res.redirect("/");
})

module.exports = router;