const express = require("express");
const router = express.Router();


//root route
router.get("/", function(req, res){
    res.render("home");
});



module.exports = router;