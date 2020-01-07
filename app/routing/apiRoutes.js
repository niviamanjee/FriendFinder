var friendsData = require("../data/friends");
//get the data from the file through node path finder
console.log("friends", friendsData)
module.exports = function (app) {

    //API GET requests 

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    });

    app.post("/api/friends", function (req, res) {
        //this is how you retrieve your posted data 
        console.log(req.body)
        // here you need to develop the matching logic
        // return to the frontend the best match

        var surveyScore = req.body.scores

        var best = {
            name: "",
            link: "",
            diffMin: 51
        }

        for (var i = 0; i < friendsData.length; i++) {
            var currentScore = friendsData[i].scores
            var diff = 0
            for (var j = 0; j < currentScore.length; j++) {
                console.log(currentScore[j], surveyScore[j])
                diff += Math.abs(currentScore[j] - surveyScore[j])
            }
            console.log(friendsData[i].name, diff)
            if (diff < best.diffMin) {
                best.name = friendsData[i].name
                best.link = friendsData[i].photo
                best.diffMin = diff
            }
        }
        friendsData.push(req.body)
        console.log(friendsData)
        res.json(best)
    });

    app.post('/api/clear', function () {
        friendsData.length = 0;


        res.json({ ok: true });
    });
}