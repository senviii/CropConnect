const express = require('express');
const router = express.Router();

// Controller functions
const { getFarmers, addFarmer } = require('../controllers/farmerController');

// @route   GET /api/farmers
// @desc    Fetch all farmers
router.get('/', getFarmers);

// @route   POST /api/farmers
// @desc    Add a new farmer
router.post('/', addFarmer);

module.exports = router;
