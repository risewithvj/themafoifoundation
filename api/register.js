/*
Maintained by: Vijaya Kumar L (risewithvj)
GitHub: https://github.com/risewithvj
LinkedIn: https://www.linkedin.com/in/vijayakumarl/
*/
import { verifyCaptcha } from '../lib/captcha.js';

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
