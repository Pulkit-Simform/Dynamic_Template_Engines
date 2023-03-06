
const express = require("express");
const router = express.Router();

let productData = require("./gallery.json");
productData = JSON.parse(JSON.stringify(productData));
let genreMap = new Map();

/** Initial state of statistics */

let stat = { total: productData.length , max:Number.MIN_SAFE_INTEGER , min:Number.MAX_SAFE_INTEGER}

for(let product of productData){    
    
    let count = product.price.split("");
    count.shift();
    count = count.join("");

    stat.max = Math.max(count,stat.max);
    stat.min = Math.min(count,stat.max);
    
    product.category.split("|").forEach(el => {
        if(genreMap.get(el)){
            let count = genreMap.get(el);
            genreMap.set(el,++count);
        }else genreMap.set(el,1);        
    })
}

stat.best_genre = [...genreMap.entries()].sort()[0][0];



/** For Dynamic Content */
const renderingOptions = {
    title:"Gallery",
    galleryData:productData,
    stat,
    genreMap
}

router.get("/",(req,res) => {
    res.render("gallery",renderingOptions);
})

module.exports = router;