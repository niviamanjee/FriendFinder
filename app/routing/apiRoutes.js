var friendsData = require("../data/friends");
//get the data from the file through node path finder

module.exports = function (app) {

    //API GET requests 

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    });

    app.post("/api/friends", function (req, res) {
        //this is how you retrieve your posted data 
        console.log(req.body)
        friendsData.push(req.body)
    });

    app.post('/api/clear', function () {
        friendsData.length = 0;


        res.json({ ok: true });
    });
}