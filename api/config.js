/*
Maintained by: Vijaya Kumar L (risewithvj)
GitHub: https://github.com/risewithvj
LinkedIn: https://www.linkedin.com/in/vijayakumarl/
*/

// Exposes the PUBLIC Supabase connection info (project URL + anon key) so the
// admin dashboard can read it from environment variables instead of hardcoding
// it in the client. The anon key is a public, RLS-gated key by design — the
// SERVICE key is never returned here.
export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  return res.status(200).json({
    url: process.env.SUPABASE_URL,
    anonKey: process.env.SUPABASE_ANON_KEY,
  });
}
