const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const farmerRoutes = require('./routes/farmerRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/farmers', farmerRoutes);

app.get('/', (req, res) => {
  res.send('🌾 FarmerGo backend running successfully! 🌿');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚜 Server started on http://localhost:${PORT}`);
});
