/*
Maintained by: Vijaya Kumar L (risewithvj)
GitHub: https://github.com/risewithvj
LinkedIn: https://www.linkedin.com/in/vijayakumarl/
*/

// Admin login proxy. Verifies the numeric captcha server-side (same HMAC logic
// as register.js, via the shared helper), then exchanges email/password for a
// Supabase session using the anon key held server-side — the anon key is never
// sent to the browser.
import { verifyCaptcha } from '../lib/captcha.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

  try {
    const body = req.body || {};
    const { email, password, captchaAnswer, captchaToken } = body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please enter your email and password.' });
    }

    // Captcha must pass before we ever touch the auth endpoint.
    if (!verifyCaptcha(captchaAnswer, captchaToken)) {
      return res.status(400).json({ error: 'Incorrect or expired verification code. Please try again.' });
    }

    const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok || !data.access_token) {
      return res.status(400).json({ error: data.error_description || 'Invalid email or password.' });
    }

    // Return the full Supabase session (access_token, etc.) to the browser.
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
