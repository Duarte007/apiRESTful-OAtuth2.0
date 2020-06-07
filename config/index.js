module.exports = {
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '3306',
  dbUser: process.env.DB_USER || 'root',
  dbName: process.env.DB_NAME,
  dbPass: process.env.DB_PASS,
  dialect: process.env.DIALECT || 'sqlite',
  apiVersion: process.env.API_VERSION,
  secret: process.env.SECRET || '1!2@3#4$'
}
