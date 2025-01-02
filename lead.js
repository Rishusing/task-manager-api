const express = require('express');
const Lead = require('../models/lead');
const auth = require('../middleware/auth');

const router = express.Router();

const cors = require('cors')
router.use(
    cors({
        origin: '*',
    }),
)

router.get('/leads', auth, async (req, res) => {
    const leads = await Lead.find({ assignedTo: req.user._id });
    res.json(leads);
});

router.get('/leads/:id', auth, async (req, res) => {

    try{
        const lead = await Lead.findOne({ _id: req.params.id, assignedTo: req.user._id });
        res.json(lead);
    }catch(err){
        res.status(400).json({ message: err.message });
    }

});

router.post('/leads', auth, async (req, res) => {
    try {
        const lead = await Lead.create({ ...req.body, assignedTo: req.user._id });
        res.status(201).json(lead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/leads/:id/status', auth, async (req, res) => {
    try {
        const lead = await Lead.findOneAndUpdate(
            { _id: req.params.id, assignedTo: req.user._id },
            { status: req.body.status },
            { new: true }
        );
        if (!lead) return res.status(404).json({ message: 'Lead not found' });
        res.json(lead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/leads/:id/interactions', auth, async (req, res) => {
    try {
        const lead = await Lead.findOne({ _id: req.params.id, assignedTo: req.user._id });
        if (!lead) return res.status(404).json({ message: 'Lead not found' });

        lead.interactions.push(req.body);
        await lead.save();
        res.json(lead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/leads/:id/interactions', auth, async (req, res) => {
    try {
        const lead = await Lead.findOne({ _id: req.params.id, assignedTo: req.user._id });
        if (!lead) return res.status(404).json({ message: 'Lead not found' });
        res.json(lead.interactions);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
