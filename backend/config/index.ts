import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ,
  MONGO_URI: process.env.MONGO_URI ,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  DB_HOST: process.env.DB_HOST || 'localhost',
};

export default config;
