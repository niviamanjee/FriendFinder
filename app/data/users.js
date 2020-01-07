var userData = require("../data/friends")
//creates a constructor that holds the users 

var UserIndex = function () {
    this.users = [];

    this.addUser = function (userName, imageLink, answers) {
        this.users.push(new User(userName, imageLink, answers))
    }
}



module.exports = UserIndex;