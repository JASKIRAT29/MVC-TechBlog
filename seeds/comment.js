const { Comment } = require('../models');

const CommentData = [
  {
    comment_text: 'Today’s travel tip: The absolute must-look site if you ever rent a car',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: '10 things to bring with you into the sky?',
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: 'Is this believable?',
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: 'Maybe nice',
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text: 'Up in the (international) air',
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: 'Development tourism',
    user_id: 1,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
