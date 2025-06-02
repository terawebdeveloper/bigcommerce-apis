const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
 
app.get('/api/checkout-data', async (req, res) => {
    const checkoutId = req.query.checkout_id;
 
    if (!checkoutId) {
        return res.status(400).json({ error: 'Missing checkout_id parameter' });
    }
 
    try {
        const response = await axios.get(`https://api.bigcommerce.com/stores/d3h8howbsb/v3/checkouts/${checkoutId}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Auth-Token': 'gsg7tpt974p4yoiunecoh8r8oog84s9',
                'Access-Control-Allow-Origin': 'https://internationalpartnerseu.com',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        });
 
        console.log(`Fetched data for checkout ID: ${checkoutId}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching checkout data:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
 
app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
