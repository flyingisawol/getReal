const express = require('express')
const passport = require('passport')
const router = express.Router()



const authenticate = (req, res, next) => {
  const auth = passport.authenticate('local', (err, user, info) => {
    if (err) next(err) 
    if (!user) res.status(401).json({ msg: 'Wrong username or password'})
    req.logIn(user, (err) => {
      if (err) next(err)
      next()
    })
  })
  auth(req, res, next)
}

router.post('/login', authenticate, (req, res) => {
  console.log('logged in', req.user.username)
  const { id, username } = req.user
  res.json({ id, username } )
})

router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({
      msg: 'Logged out'
    })
  })
})

router.get('/loggedin-user', (req, res) => {
  if (req.user) {
    const { id, username } = req.user
    res.json({ id, username })
  } else {
    res.status(404).json({ msg: 'User not logged in'})
  }
})

module.exports = router