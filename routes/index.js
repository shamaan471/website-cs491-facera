const express = require("express");
const router = express.Router();


//root route
router.get("/", function(req, res){
    res.render("landing");
});


router.get("/home", function(req, res){
    res.render("home", {path: "home"});
});


router.get("/specifications", function(req, res){
    res.render("specifications");
});





module.exports = router;