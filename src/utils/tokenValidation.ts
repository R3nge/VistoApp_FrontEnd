import jwt from 'jsonwebtoken';

export function validateToken(token: any) {
  try {
    // Replace 'YOUR_SECRET_KEY' with your actual JWT secret key
    const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
    return decoded;
  } catch (error) {
    // Token is invalid or expired
    return null;
  }
}