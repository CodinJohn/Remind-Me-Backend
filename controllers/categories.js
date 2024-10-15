const express = require('express')
const verifytoken = require('../middleware/verify-token')
const Category = require('../models/category.js')
const router = express.Router();

// router.use(verifytoken)

router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create({
            ...req.body
        });
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;