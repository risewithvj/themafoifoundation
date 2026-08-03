/*
Maintained by: Vijaya Kumar L (risewithvj)
GitHub: https://github.com/risewithvj
LinkedIn: https://www.linkedin.com/in/vijayakumarl/
*/
import crypto from 'crypto';

// Stateless captcha: the server never has to "remember" the code.
// It signs (code + expiry) with a secret only the server knows, and hands
// the signature back to the browser as an opaque token. On submit, register.js
// recomputes the signature from the answer the user typed and checks it matches.
function sign(data, secret) {
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const secret = process.env.CAPTCHA_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'Captcha not configured on server.' });
  }

  const code = String(Math.floor(1000 + Math.random() * 9000)); // 4-digit code
  const expiry = Date.now() + 5 * 60 * 1000; // 5 minute validity
  const signature = sign(`${code}.${expiry}`, secret);
  const token = Buffer.from(`${expiry}.${signature}`).toString('base64');

  return res.status(200).json({ code, token });
}
