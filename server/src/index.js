const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('../config/db');
const { errorHandler, notFound } = require('../middleware/errorMiddleware');

const authRoutes = require('../routes/authRoutes');
const blogRoutes = require('../routes/blogRoutes');
const designRoutes = require('../routes/designRoutes');
const messageRoutes = require('../routes/messageRoutes');
const projectRoutes = require('../routes/projectRoutes');
const serviceRoutes = require('../routes/serviceRoutes');
const testimonialRoutes = require('../routes/testimonialRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'qubnova-technologies-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/designs', designRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

if (require.main === module) {
  startServer().catch((error) => {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  });
}

module.exports = app;
