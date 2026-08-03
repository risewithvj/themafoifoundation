/*
Maintained by: Vijaya Kumar L (risewithvj)
GitHub: https://github.com/risewithvj
LinkedIn: https://www.linkedin.com/in/vijayakumarl/
*/
/* ============================================================
   THE MA FOI FOUNDATION — app.js
   Student registration form only.
   Admin dashboard → admin.html
   ============================================================ */

/* ── SUPABASE HELPERS ──
   Note: this file never talks to Supabase directly. It only calls our own
   /api/register endpoint, which holds the real Supabase credentials safely
   server-side (see api/register.js). Nothing DB-related is exposed here. */

async function sbInsert(row) {
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Insert failed (${res.status})`);
  }
  return res.json();
}

/* ── UTILS ── */
function $(id) { return document.getElementById(id); }

function showToast(msg, type = 'info') {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.className = `toast t-${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span><span>${msg}</span>`;
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.classList.remove('show'); }, 4500);
}

function sanitize(s) {
  return (s || '').trim().replace(/[<>"'%;()&+]/g, '').trim();
}

/* ── HEADER SCROLL ── */
window.addEventListener('scroll', () => {
  document.querySelector('.site-header')?.classList.toggle('scrolled', scrollY > 20);
}, { passive: true });

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── LOCATION & BRANCH MAPPINGS ── */
const CITY_BRANCHES = {
  'Chennai':   ['Egmore', 'Kodambakkam', 'Anna Nagar'],
  'Bangalore': ['Chamrajpet', 'Yeshwanthpur'],
};

const COURSE_CITIES = {
  'Gold Loan':               ['Chennai'],
  'Artificial Intelligence': ['Chennai'],
  'Cyber Security':          ['Chennai'],
  'BFSI':                    ['Bangalore'],
  'Micro Finance':           ['Bangalore'],
  'Data Analytics':          ['Chennai', 'Bangalore'],
};

/* ── RESET LOCATION & BRANCH ── */
function resetLocationBranch() {
  $('cityGroup').classList.add('hidden');
  $('branchGroup').classList.add('hidden');
  $('preferredLocation').innerHTML = '<option value="">-- Select City --</option>';
  $('preferredBranch').innerHTML   = '<option value="">-- Select Branch --</option>';
  clearErr('preferredLocation', 'errLocation');
  clearErr('preferredBranch', 'errBranch');
}

/* ── POPULATE BRANCHES BASED ON CITY ── */
function populateBranches(city) {
  const branches = CITY_BRANCHES[city] || [];
  $('preferredBranch').innerHTML = '<option value="">-- Select Branch --</option>' +
    branches.map(b => `<option value="${b}">${b}</option>`).join('');
  $('branchGroup').classList.remove('hidden');
}

/* ── TRAINING CHANGE → UPDATE CITIES ── */
$('training')?.addEventListener('change', function () {
  resetLocationBranch();
  const course = this.value;
  if (!course) return;

  const cities = COURSE_CITIES[course] || [];
  const citySelect = $('preferredLocation');

  if (cities.length === 1) {
    citySelect.innerHTML = `<option value="${cities[0]}">${cities[0]}</option>`;
    $('cityGroup').classList.remove('hidden');
    populateBranches(cities[0]);
  } else {
    citySelect.innerHTML = '<option value="">-- Select City --</option>' +
      cities.map(c => `<option value="${c}">${c}</option>`).join('');
    $('cityGroup').classList.remove('hidden');
  }
});

/* ── CITY CHANGE → UPDATE BRANCHES ── */
$('preferredLocation')?.addEventListener('change', function () {
  $('branchGroup').classList.add('hidden');
  $('preferredBranch').innerHTML = '<option value="">-- Select Branch --</option>';
  clearErr('preferredBranch', 'errBranch');
  if (!this.value) return;
  populateBranches(this.value);
});

/* ── VALIDATION ── */
function showErr(fieldId, errId) {
  $(fieldId)?.classList.add('error');
  const e = $(errId); if (e) e.classList.add('show');
}
function clearErr(fieldId, errId) {
  $(fieldId)?.classList.remove('error');
  const e = $(errId); if (e) e.classList.remove('show');
}
function clearAllErrors() {
  document.querySelectorAll('.field-error').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));
  document.querySelector('.phone-wrap')?.classList.remove('error');
  $('cityGroup')?.classList.add('hidden');
  $('branchGroup')?.classList.add('hidden');
  if ($('preferredLocation')) $('preferredLocation').innerHTML = '<option value="">-- Select City --</option>';
  if ($('preferredBranch'))   $('preferredBranch').innerHTML  = '<option value="">-- Select Branch --</option>';
}

function validateForm() {
  let ok = true;

  const name = $('fullName').value.trim();
  if (!name || name.length < 2) { showErr('fullName', 'errName'); ok = false; } else clearErr('fullName', 'errName');

  const email = $('email').value.replace(/\s+/g, '').toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { showErr('email', 'errEmail'); ok = false; }
  else { clearErr('email', 'errEmail'); $('email').value = email; }

  if (!$('currentEducation').value) { showErr('currentEducation', 'errEdu'); ok = false; } else clearErr('currentEducation', 'errEdu');

  if (!$('currentYear').value) { showErr('currentYear', 'errYear'); ok = false; } else clearErr('currentYear', 'errYear');

  if (!$('higherStudies').value) { showErr('higherStudies', 'errHigher'); ok = false; } else clearErr('higherStudies', 'errHigher');

  if (!$('training').value) { showErr('training', 'errTraining'); ok = false; } else clearErr('training', 'errTraining');

  if (!$('preferredLocation').value) { showErr('preferredLocation', 'errLocation'); ok = false; } else clearErr('preferredLocation', 'errLocation');

  if (!$('preferredBranch').value) { showErr('preferredBranch', 'errBranch'); ok = false; } else clearErr('preferredBranch', 'errBranch');

  const wa = $('whatsappNumber').value.trim();
  const pw = document.querySelector('.phone-wrap');
  if (!wa || !/^[6-9]\d{9}$/.test(wa)) {
    $('whatsappNumber').classList.add('error'); pw?.classList.add('error');
    $('errWa').classList.add('show'); ok = false;
  } else {
    $('whatsappNumber').classList.remove('error'); pw?.classList.remove('error');
    $('errWa').classList.remove('show');
  }

  const captchaVal = $('captchaInput')?.value.trim();
  if (!captchaVal) {
    showErr('captchaInput', 'errCaptcha'); ok = false;
  } else {
    clearErr('captchaInput', 'errCaptcha');
  }

  return ok;
}

/* ── CAPTCHA ── */
let captchaToken = null;

async function loadCaptcha() {
  const codeEl = $('captchaCode');
  const inputEl = $('captchaInput');
  if (!codeEl) return;
  codeEl.textContent = '••••';
  if (inputEl) inputEl.value = '';
  try {
    const res = await fetch('/api/captcha');
    const data = await res.json();
    codeEl.textContent = data.code;
    captchaToken = data.token;
  } catch {
    codeEl.textContent = '----';
    captchaToken = null;
  }
}

$('captchaRefresh')?.addEventListener('click', loadCaptcha);
loadCaptcha();

/* ── WHATSAPP DIGITS ONLY ── */
$('whatsappNumber')?.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

/* ── FORM SUBMIT ── */
$('registrationForm')?.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (!validateForm()) {
    const firstErr = this.querySelector('.form-input.error, .form-select.error, .phone-wrap.error');
    firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const btn = $('submitBtn');
  btn.disabled = true;
  $('submitBtnText').textContent = 'Submitting…';
  $('submitSpinner').classList.remove('hidden');

  const payload = {
    full_name:         sanitize($('fullName').value),
    email:             $('email').value.trim().toLowerCase(),
    current_education: $('currentEducation').value,
    education_status:  $('currentYear').value,
    preference:        $('higherStudies').value,
    training:          $('training').value,
    preferred_city:    $('preferredLocation').value,
    preferred_branch:  $('preferredBranch').value,
    whatsapp_number:   $('whatsappNumber').value.trim(),
    captchaAnswer:     $('captchaInput').value.trim(),
    captchaToken:      captchaToken,
  };

  try {
    await sbInsert(payload);

    // Facebook Lead Event — fires ONLY after successful registration
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }

    $('summaryName').textContent     = payload.full_name;
    $('summaryEmail').textContent    = payload.email;
    $('summaryTraining').textContent = payload.training;
    $('summaryLocation').textContent = payload.preferred_city;
    $('summaryBranch').textContent   = payload.preferred_branch;

    $('formCard').classList.add('hidden');
    $('successCard').classList.remove('hidden');
    $('successCard').scrollIntoView({ behavior: 'smooth', block: 'center' });

  } catch (err) {
    showToast(err.message || 'Registration failed. Please try again.', 'error');
    loadCaptcha();
  } finally {
    btn.disabled = false;
    $('submitBtnText').textContent = 'Register';
    $('submitSpinner').classList.add('hidden');
  }
});

/* ── SUBMIT ANOTHER ── */
$('anotherResponseBtn')?.addEventListener('click', () => {
  $('registrationForm').reset();
  clearAllErrors();
  loadCaptcha();
  $('successCard').classList.add('hidden');
  $('formCard').classList.remove('hidden');
  document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ── HERO IMAGE FALLBACK ── */
const heroBgImg = document.querySelector('.hero-bg-img');
if (heroBgImg) {
  heroBgImg.addEventListener('error', () => {
    heroBgImg.style.display = 'none';
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.style.background =
        'linear-gradient(135deg, #0D1B2A 0%, #084298 50%, #0D6EFD 100%)';
    }
  });
}