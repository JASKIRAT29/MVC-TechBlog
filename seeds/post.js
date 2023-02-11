const { Post } = require('../models');

const postData = [
  {
    title: 'Blossoming Apricot',
    user_id: 1,
    post_text:'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    user_id: 2,
    post_text: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Sand + Sea = Summer',
    user_id: 3,
    post_text: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Beach Chairs',
    user_id: 4,
    post_text: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Beach Sunrise',
    user_id: 5,
    post_text: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Fall Colors',
    gallery_id: 6,
    post_text:'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Autumn Mountains',
    user_id: 3,
    post_text:'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Frozen River',
    gallery_id: 8,
    post_text:'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    user_id: 4,
    post_text:'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
