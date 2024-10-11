const express = require('express')
const verifytoken = require('../middleware/verify-token')
const Remind = require('../models/remind.js')
const router = express.Router();

router.use(verifytoken)

router.post('/', async (req, res) => {
    try {
      const newRemind =await Remind.create({
        ...req.body,
        owner: req.user._id
      });
      res.status(201).json(newRemind);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
  
router.get('/')







modules.exports = router;

