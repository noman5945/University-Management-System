import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DB_CONNECTION,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
  NODE_ENV: process.env.NODE_ENV,
  jwt_access_secret: process.env.JWT_SIGNATURE,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  email_app_pass: process.env.EMAIL_APP_PASS,
  email_sender: process.env.EMAIL_SENDER,
  reset_password_link: process.env.RESET_PASSWORD_LINK,
};
