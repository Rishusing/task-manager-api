const express = require('express');
const OrderController = require('../services/order');
const auth = require('../middleware/auth');

const router = express.Router();

const cors = require('cors')
router.use(
    cors({
        origin: '*',
    }),
)
// Add an order to the lead's order history
router.post('/leads/:leadId/orders', auth, OrderController.addOrder);

// Update an order in the lead's order history
router.put('/leads/:leadId/orders/:orderId', auth, OrderController.updateOrder);

// Delete an order from the lead's order history
router.delete('/leads/:leadId/orders/:orderId', auth, OrderController.deleteOrder);

// Get all orders for a specific lead
router.get('/leads/:leadId/orders', auth, OrderController.getOrders);

module.exports = router;
