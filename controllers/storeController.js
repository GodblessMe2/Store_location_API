const Store = require('../models/storeModel')
// @desc GET all stores
// @route GET /api/v1/stores
// @access Public

exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();
    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    res.status(500).json({error: 'Server Error'});
  }
}

// @desc post stores
// @route post /api/v1/stores
// @access Public

exports.createStore = async (req, res, next) => {
  try {
    const stores = await Store.create(req.body);
    return res.status(200).json({
      success: true,
      data: stores
    });
  } catch (err) {
    console.error(err);
    if(err.code === 11000) {
      return res.status(400).json({
        error: 'This store already exits'
      })
    }
    res.status(500).json({error: 'Server Error'});
  }
}