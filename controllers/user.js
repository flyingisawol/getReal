const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Rate = require('../models/rate')
const upload = require('../middlewares/upload')


//homepage 


router.get('/api/getreal', async (req, res) => {
    const users = await User.find()
    console.log(users)
    //.sort() how users will appear/ most active?/ most personality matches
    res.json(users)
})



//show route 

router.get('/api/getreal/:id', upload.single('profileImg'), async (req, res) => {
    let user = await User.findById(req.params.id).populate('author')
    //AUTHORISATION HERE
    res.json(user)
})

//create route 

router.post('/api/getreal/create', upload.single('profileImg'), async (req, res) => {

    let user = {
        ...req.body,
        profileImg: req.file?.path,
      }
    const userProfile = await User.create(user)
    res.json(userProfile)
})



module.exports = router

