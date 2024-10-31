const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to submit Zero-Trust Score data (POST request)
app.post('/api/zero-trust', (req, res) => {
  const zeroTrustData = req.body;

  // Store the received data in a file for simplicity
  fs.writeFileSync('zeroTrustData.json', JSON.stringify(zeroTrustData, null, 2));

  res.status(200).json({ message: 'Data saved successfully!' });
});

// Endpoint to retrieve stored Zero-Trust Score data (GET request)
app.get('/api/zero-trust', (req, res) => {
  try {
    // Read data from the file
    const data = fs.readFileSync('zeroTrustData.json', 'utf-8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ message: 'No data found or error reading data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
