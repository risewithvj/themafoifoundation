/*
Maintained by: Vijaya Kumar L (risewithvj)
GitHub: https://github.com/risewithvj
LinkedIn: https://www.linkedin.com/in/vijayakumarl/
*/

// Shared HMAC captcha helpers. Kept outside the /api directory so it is never
// exposed as its own serverless endpoint — it is only imported by the API
// routes that need it (register.js, admin-login.js).
import crypto from 'crypto';

export function sign(data, secret) {
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

export function verifyCaptcha(captchaAnswer, captchaToken) {
  const secret = process.env.CAPTCHA_SECRET;
  if (!secret || !captchaAnswer || !captchaToken) return false;

  let decoded;
  try {
    decoded = Buffer.from(captchaToken, 'base64').toString('utf8');
  } catch {
    return false;
  }

  const [expiry, signature] = decoded.split('.');
  if (!expiry || !signature) return false;
  if (Date.now() > Number(expiry)) return false; // expired, ask them to refresh

  const expectedSignature = sign(`${captchaAnswer}.${expiry}`, secret);

  // Constant-time compare to avoid leaking info via timing
  const a = Buffer.from(signature);
  const b = Buffer.from(expectedSignature);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
