const express = require('express')
const verifytoken = require('../middleware/verify-token')
const Remind = require('../models/remind.js')
const router = express.Router();

router.use(verifytoken)

router.post('/', async (req, res) => {
    try {
        const newRemind = await Remind.create({
            ...req.body,
            owner: req.user._id
        });
        res.status(201).json(newRemind);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
      const reminds = await Remind.find({ owner: req.user._id });
      res.status(200).json(reminds);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

router.get('/:id', async (req, res) => {
    try {
        const remind = await Remind.findOne({ _id: req.params.id, owner: req.user._id });
        if (!remind) {
            return res.status(404).json({ error: 'Remind Me not found.' });
        }
        res.status(200), json(remind)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });

    }
});

router.put('/:id', async (req, res) => {
    try {
        const remind = await Remind.findOneAndUpdate(
            { _id: req.params.id, owner: req.user._id },
            req.body,
            { new: true }
        );
        if (!remind) {
            return res.status(404).json({ error: 'Remind Me not found.' })
        }
        res.status(200).json(remind)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const remind = await Remind.findOneAndDelete({ _id: req.param.id, owner: req.user._id });
        if (!remind) {
            return res.status(404).json({ error: 'Remind Me not found.' });
        }
        res.status(200).json({ message: 'Remind Me deleted.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

