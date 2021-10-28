const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html", { title: "First Website" });
})

router.get("/contact", (req, res) => {
    res.render("contact.html", { title: "First Website" });
})

// router.get("/about", (req, res) => {
//     res.render("about", { title: "About Page" });
// })

module.exports = router;