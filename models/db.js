const Sequelize = require('sequelize');
const connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/nodeblog';
const db = new Sequelize(connectionString);

// Defining users model
const User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

// Defining posts model
const Post = db.define('post', {
  title: Sequelize.STRING,
  body: Sequelize.STRING,
  date: Sequelize.DATE
})

// Defining users model
const Comment = db.define('comment', {
  username: Sequelize.STRING,
  body: Sequelize.STRING
})

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

db.sync({
	force: true,
})
.then(function(){
    return User.create({
      username: "kevin",
      password: "hackme"
    })
  })
.then(function(User){
      return User.createPost({
      title: "YOLO",
      body: "Baby please",
      date: "2017-02-25"
    })
  })
.catch( (error) => console.log(error) );

module.exports = {
  db: db,
  User: User,
  Post: Post,
  Comment: Comment
}
