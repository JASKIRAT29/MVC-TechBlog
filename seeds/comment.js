const { Comment } = require('../models');

const CommentData = [
  {
    comment_text: 'Is Branches with pink apricot blossoms against a blue background?',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'Is it looks nice?',
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
    comment_text: 'I like Sandy beach with the blue sea and sky in the background.',
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: 'I like to know more about trees & flowers.',
    user_id: 1,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
