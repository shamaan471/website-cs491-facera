const express = require("express");
const fs = require('fs');
const router = express.Router();


//root route
router.get("/", function(req, res){
    res.render("landing");
});


router.get("/home", function(req, res){
    res.render("home", {path: "home"});
});


// router.get("/specifications", function(req, res){
//     res.render("specifications");
// });


router.get('/analysis_report', (req, res) => {
    const path = './assets/Analysis_Report.pdf'
    if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }
})


router.get('/specification_report', (req, res) => {
    const path = './assets/Specification_Report.pdf'
    if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }
})

module.exports = router;