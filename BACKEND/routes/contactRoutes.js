const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');

// @route   POST /api/contacts
// @desc    Create a new contact message
// @access  Public
router.post('/', createContact);

// @route   GET /api/contacts
// @desc    Get all contact messages
// @access  Private (you can add authentication middleware later)
router.get('/', getAllContacts);

// @route   GET /api/contacts/:id
// @desc    Get single contact message by ID
// @access  Private
router.get('/:id', getContactById);

// @route   PUT /api/contacts/:id
// @desc    Update contact status
// @access  Private
router.put('/:id', updateContactStatus);

// @route   DELETE /api/contacts/:id
// @desc    Delete contact message
// @access  Private
router.delete('/:id', deleteContact);

module.exports = router;