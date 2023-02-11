const { User } = require('../models');

const userData = [
  {
    "username": "jaskirat",
    "email_id": "jaskirat@gmail.com",
    "password": "jazz7574",
  },
  {
    "username": "kirat",
    "email_id": "kirat@gmail.com",
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
    "username": "Britani",
    "email_id": "britani@gmail.com",
    "password": "britani6585",
  },
  {
    "username": "Jowan",
    "email_id": "jowan@gmail.com",
    "password": "jowan6476",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
