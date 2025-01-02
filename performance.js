const express = require('express');
const PerformanceController = require('../services/performance');
const auth = require('../middleware/auth');

const router = express.Router();
const cors = require('cors')
router.use(
    cors({
        origin: '*',
    }),
)

// Get performance for a specific lead
router.get('/leads/:leadId/performance', auth, PerformanceController.getLeadPerformance);

// Get all well-performing accounts
router.get('/leadsperformance/userId/well-performing', auth, PerformanceController.getWellPerformingAccounts);

// Get all underperforming accounts
router.get('/leadsperformance/userId/under-performing', auth, PerformanceController.getUnderperformingAccounts);

module.exports = router;
