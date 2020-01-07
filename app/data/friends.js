var friends = [
    {
        "name": "Ahmed",
        "photo": "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            4,
            5
        ]
    },
    {
        "name": "Nivi",
        "photo": "https://images2.minutemediacdn.com/image/upload/c_crop,h_1192,w_2122,x_0,y_74/f_auto,q_auto,w_1100/v1575329078/shape/mentalfloss/609640-gettyimages-802480150.jpg",
        "scores": [
            5,
            1,
            4,
            5,
            5,
            1,
            2,
            5,
            5,
            1
        ]
    },
    {
        "name": "Isabel",
        "photo": "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg",
        "scores": [
            1,
            1,
            4,
            4,
            1,
            1,
            2,
            2,
            4,
            1
        ]
    },
];

//this sets the array of FriendFinder users
//which will be created dynamically as users sign into the app

//creating a constructor for each user 

// var User = function (userName, imageLink, answers) {
//     this.userName = userName;
//     this.imageLink = imageLink;
//     this.answers = answers;
// }



module.exports = friends;
//makes the array accessible to other files using require