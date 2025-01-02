const express = require('express');
const ContactController = require('../services/contact');
const auth = require('../middleware/auth');

const router = express.Router();

const cors = require('cors')
router.use(
    cors({
        origin: '*',
    }),
)
// Add a contact for a specific lead
router.post('/leads/:leadId/contacts', auth, ContactController.addContact);

// Update a contact for a specific lead
router.put('/leads/:leadId/contacts/:contactId', auth, ContactController.updateContact);

// Delete a contact for a specific lead
router.delete('/leads/:leadId/contacts/:contactId', auth, ContactController.deleteContact);

// Get all contacts for a specific lead
router.get('/leads/:leadId/contacts', auth, ContactController.getContacts);

module.exports = router;
