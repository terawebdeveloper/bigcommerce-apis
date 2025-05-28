// File: /api/checkout-data.js

import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://api.bigcommerce.com/stores/d3h8howbsb/v3/checkouts/5a676375-9921-40c8-9970-6685d845b673', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Auth-Token': process.env.BIGCOMMERCE_TOKEN,
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error in /api/checkout-data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', detail: error.message });
    }
}
