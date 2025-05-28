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
                // 'X-Auth-Token': 'gsg7tpt974p4yoiunecoh8r8oog84s9',
                'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOlsxXSwiY29ycyI6WyJodHRwczovL2RldmVsb3Blci5iaWdjb21tZXJjZS5jb20iXSwiZWF0IjoxNzQ4NTk0NzE5LCJpYXQiOjE3NDg0MjE5MTksImlzcyI6IkJDIiwic2lkIjoxMDAyOTkzMjkxLCJzdWIiOiJCQyIsInN1Yl90eXBlIjowLCJ0b2tlbl90eXBlIjoxfQ.xGLz3TlLHqVnqBxGEidW6zLPnnWkow8ahuNXPWRWptghTDN8M_xUBwYVsPsAgJnjVZlqwtX_jAa7buGzqhEDbA',
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


