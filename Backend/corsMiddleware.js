// corsMiddleware.js

const allowedOrigins = ['http://localhost:3001'];

const corsMiddleware = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // ถ้า request method เป็น OPTIONS ให้ส่งสถานะ 200 กลับไปเลย
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  // ไปยัง middleware หรือ route handler ถัดไป
  next();
};

module.exports = corsMiddleware;
