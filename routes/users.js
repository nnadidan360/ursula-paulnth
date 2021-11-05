var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET users listing. */


router.get('/login', function(req, res) {
  res.render('login');
});



router.post('/login', (req, res, next)=> {
	passport.authenticate('local',{
		successRedirect: '/dashboard',
		failureRedirect: '/users/login'
	})(req, res, next)
})



router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/users/login')
})

module.exports = router;
