// var friendsArray = [];
//this sets the array of FriendFinder users
//which will be created dynamically as users sign into the app

//creating a constructor for each user 

var User = function (userName, imageLink, answers) {
    this.userName = userName;
    this.imageLink = imageLink;
    this.answers = answers;
}



module.exports = User;
//makes the array accessible to other files using require