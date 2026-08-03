/*
Maintained by: Vijaya Kumar L (risewithvj)
GitHub: https://github.com/risewithvj
LinkedIn: https://www.linkedin.com/in/vijayakumarl/
*/
import crypto from 'crypto';

function sign(data, secret) {
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

function verifyCaptcha(captchaAnswer, captchaToken) {
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

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

  try {
    const body = req.body || {};
    const { captchaAnswer, captchaToken, ...row } = body;

    if (!verifyCaptcha(captchaAnswer, captchaToken)) {
      return res.status(400).json({ error: 'Incorrect or expired verification code. Please try again.' });
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/student_interest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(row),
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(400).json({ error: err.message });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
