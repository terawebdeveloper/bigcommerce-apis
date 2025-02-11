const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port =  3000;

// app.use(cors());
app.use(cors({
    origin: 'https://internationalpartnerseu.com',
    credentials: true
}));


app.get('/api/checkout-data', async (req, res) => {
    try {
        const response = await axios.get('https://api.bigcommerce.com/stores/d3h8howbsb/v3/checkouts/5a676375-9921-40c8-9970-6685d845b673',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Auth-Token': 'gsg7tpt974p4yoiunecoh8r8oog84s9',
                'Access-Control-Allow-Origin' : 'https://internationalpartnerseu.com',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});


