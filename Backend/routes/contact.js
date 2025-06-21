const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Note: correct relative path

router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: 'Contact saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save contact' });
  }
});

module.exports = router;
