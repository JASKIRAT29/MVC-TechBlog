const { User } = require('../models');

const userData = [
  {
    "username": "jaskirat",
    "email": "jaskirat@gmail.com",
    "password": "jazz7574",
  },
  {
    "username": "kirat",
    "email": "kirat@gmail.com",
    "password": "kirat65765",
  },
  {
    "username": "faisal",
    "email": "faisal@gmail.com",
    "password": "faisal5656",
  },
  {
    "username": "nicole",
    "email": "nicole@gmail.com",
    "password": "nicole6878",
  },
  {
    "username": "Britani",
    "email": "britani@gmail.com",
    "password": "britani6585",
  },
  {
    "username": "Jowan",
    "email": "jowan@gmail.com",
    "password": "jowan6476",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
