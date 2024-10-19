module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'your_username',
    password: process.env.DB_PASSWORD || 'your_password',
    database: process.env.DB_NAME || 'your_database_name',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432
  },
  // You can add more environments (test, production) as needed
};
