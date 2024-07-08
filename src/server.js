const express = require('express');
const sequelize = require('./config/db.js');
const connectMongoDB = require('./config/mongo.js');
const swaggerDocs = require('./config/swagger.js');
const swaggerUi = require('swagger-ui-express');
const sessionMiddleware = require('./config/session.js');
const authRoutes = require('./routes/authRoutes.js');
const bookRoutes = require('./routes/bookRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');
const reviewRoutes = require('./routes/reviewRoutes.js');
const errorHandler = require('./middleware/errorHandler.js');
const ConnectToDB = require('./config/mongo.js');

require('dotenv').config();

const db_url = process.env.MONGODB_URI;

const app = express();

app.use(express.json());
app.use(sessionMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync();
    await connectMongoDB();
    // await ConnectToDB(db_url);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
  }
};

startServer();
