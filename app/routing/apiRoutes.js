var friendsData = require("../data/friends");
//get the data from the file through node path finder

module.exports = function (app) {

    //API GET requests 

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    });

    app.post("/api/")
}