/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// const bcrypt = require('bcrypt');

// const cookieSession = require('cookie-session');

// router.use(cookieSession(({
//   name: 'session',
//   keys: ['abcdefghijklmnop']
// }))
// );

// const {getUsers, addUser, addFavourite, deleteFavourite, addPosting, deletePosting, sendMessage, receiveMessage, fetchPosting, fetchFavourites} = require('../db/queries/users.js');


/////////GETS

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/conversations', (req, res) => {
  res.render('conversations');
});

router.get('/favourites', (req, res) => {
  fetchFavourites()
  .then((response) => {
    const templateVars = {data: response}
    res.render('favourites', templateVars);
  });
});

router.get('/newposting', (req, res) => {
  res.render('newposting');
});

router.get('/mypostings', (req, res) => {
  res.render('mypostings');
});


////////// POSTS

router.post('/favourites', (req, res) => {
});

router.post('/register', (req, res) => {
  res.render('register');
});

router.post('/login', (req, res) => {
//if user not found {
  //res.redirect('/register');
// }
  res.render('login');
});

router.post('/conversations', (req, res) => {
  res.render('conversations');
});

router.post('/mypostings', (req, res) => {
  res.render('mypostings');
});

router.post('/mypostings/:id/delete', (req, res) => {
  res.render('mypostings/delete');
});

router.post('/newposting', (req, res) => {
  res.render('newposting');
});

router.post("/logout", (req, res) => {
  // res.clearCookie("userID");
  // req.session = null;
  // res.redirect("/login");
  res.render('logout');
});

module.exports = router;
