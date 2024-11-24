const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from other origins
app.use(express.json()); // Parse incoming JSON requests

// Sample route to handle donations
app.post('/api/donations', (req, res) => {
  const { food_name, quantity, expiry_date } = req.body;

  // Log the received data (for now, simulate saving it to a database)
  console.log('Donation received:', { food_name, quantity, expiry_date });

  // Respond with success
  res.status(200).json({ message: 'Donation received successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
