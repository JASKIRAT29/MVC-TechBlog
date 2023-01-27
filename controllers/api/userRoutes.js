const router = require('express').Router();
const { User,Post,Comment } = require('../../models');


// get one dish without serializing data
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
    attributes:{exclude:['password']},
  });
  res.status(200).json(userData);
}catch (err) {
    res.status(400).json(err);
  }
});
router.get('/:id',async (req, res) => {
     try{
      const userData = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id: req.params.id},
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'content', 'created_at'],
         },
        {
            model: Comment,
            attributes: ['id', 'comment_text','created_at'],
            include: {
                model: Post,
                attributes: ['title']
            }
        },
    {
        model:Post,
        attributes:['title'],
       },
     ],
    });
      console.log(UserData);
        if (!UserData) {
          // if no user is found, return an error
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        // otherwise, return the data for the requested user
        res.status(200).json(UserData);
      }
        catch(err) {
        res.status(400).json(err);
        }
  });

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.table(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
     req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
