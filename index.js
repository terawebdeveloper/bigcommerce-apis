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
        const response = await axios.get('https://api.bigcommerce.com/stores/d3h8howbsb/v3/checkouts/b9f238c9-ae3f-4a9f-b702-bb9df140e31c',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Auth-Token': 'gsg7tpt974p4yoiunecoh8r8oog84s9',
                'Access-Control-Allow-Origin' : 'https://internationalpartnerseu.com',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        });

        console.log(`Response status: ${response}`);
        
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error xx' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at xx http://localhost:${port}`);
});


