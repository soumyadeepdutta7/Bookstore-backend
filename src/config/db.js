const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // This might be necessary for cloud providers like Aiven
    },
  },
  logging: false, // Disable logging for cleaner output
});

module.exports = sequelize;
