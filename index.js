const express = require("express");
const app = express();

app.get("/index.html", function(req, res) {
    res.send();
});

app.listen(process.env.PORT || 5000);