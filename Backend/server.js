const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact'); // Adjust if your path is different

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware to log incoming request origins (optional for debugging)
app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});

// ✅ CORS setup to allow only your frontend
app.use(cors({
  origin: 'https://portfolio-rcpa.onrender.com', // <-- your deployed frontend URL
  methods: ['GET', 'POST'],
  credentials: false
}));

// ✅ Body parser
app.use(express.json());

// ✅ MongoDB connection (use MongoDB Atlas URI in Render Environment Variables)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// ✅ Routes
app.use('/api/contact', contactRoutes);

// ✅ Root check
app.get('/', (req, res) => {
  res.send('Backend is running.');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
