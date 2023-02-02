const router = require('express').Router();
const { Post,User,Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) =>{
  // try {
    const postData = await Post.findAll({
      attributes: ['id','title','content','created_at'],
      order: [['created_at', 'DESC']],
     // From the Comment table, include all comments
     include: [
        {
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            },
        },
    ]
     }).then(postData =>res.json (postData)).catch (err=> {
    console.log(err);
    res.status(500).json(err);
  })
 // }}
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
