const Farmer = require('../models/Farmer');

// @desc    Get all farmers
// @route   GET /api/farmers
// @access  Public
const getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).json({
      message: "❌ Error fetching farmers",
      error: error.message,
    });
  }
};

// @desc    Add a farmer
// @route   POST /api/farmers
// @access  Public
const addFarmer = async (req, res) => {
  try {
    const { name, location, cropType } = req.body;

    if (!name || !location || !cropType) {
      return res.status(400).json({ message: "⚠️ Please fill all required fields!" });
    }

    const newFarmer = new Farmer({ name, location, cropType });
    const savedFarmer = await newFarmer.save();

    res.status(201).json({
      message: "🌱 Farmer added!",
      data: savedFarmer,
    });
  } catch (error) {
    res.status(500).json({
      message: "❌ Error adding farmer",
      error: error.message,
    });
  }
};

module.exports = { getFarmers, addFarmer };
