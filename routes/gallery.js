
const express = require("express");
const { render } = require("pug");
const router = express.Router();
let productData = require("./gallery.json");
productData = JSON.parse(JSON.stringify(productData));



/** For Dynamic Content */
const renderingOptions = {
    title:"Gallery",
    galleryData:productData
}

router.get("/",(req,res) => {
    res.render("gallery",renderingOptions);
})

module.exports = router;