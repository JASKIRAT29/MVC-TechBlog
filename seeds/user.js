const { User } = require('../models');

const userData = [
  {
    "username": "jaskirat",
    "email_id": "jaskirat@gmail.com",
    "password": "jazz7574",
  },
  {
    "username": "kirat",
    "email_id": "kiratt@gmail.com",
    "password": "kirat65765",
  },
  {
    "username": "faisal",
    "email_id": "faisal@gmail.com",
    "password": "faisal5656",
  },
  {
    "username": "nicole",
    "email_id": "nicole@gmail.com",
    "password": "nicole6878",
  },
  {
    "username": "semir",
    "email_id": "semir@gmail.com",
    "password": "semir667878",
  },
  {
    "username": "vimo",
    "email_id": "vimo@gmail.com",
    "password": "vimo43535",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
