// ═══ MA FOI FOUNDATION — Shared JS ═══
(function(){
  // NAV scroll
  const nav = document.querySelector('.nav');
  if(nav){ window.addEventListener('scroll',()=>{ nav.style.background = window.scrollY>60?'rgba(19,38,82,.98)':'rgba(19,38,82,.97)'; },{passive:true}); }

  // Burger
  const burger = document.getElementById('burger');
  const mob = document.getElementById('mob-menu');
  if(burger && mob){ burger.addEventListener('click',()=>{ mob.classList.toggle('open'); burger.classList.toggle('open'); }); }

  // Active nav link
  const path = location.pathname.replace(/\/$/, '') || '/index';
  document.querySelectorAll('.nav-links a, .ndm a').forEach(a=>{
    const href = a.getAttribute('href')||'';
    if(href && path.endsWith(href.replace('.html','').replace(/\/$/,''))) a.classList.add('active');
  });

  // Scroll reveal
  function reveal(){
    const items = document.querySelectorAll('[data-r],[data-r2],[data-r3]');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
    },{threshold:0.08, rootMargin:'0px 0px -30px 0px'});
    items.forEach(el=>obs.observe(el));
  }
  reveal();

  // Counter animation
  function animateCount(el){
    if(el.dataset.animated) return;
    el.dataset.animated = '1';
    const target = parseFloat(el.dataset.count)||0;
    const suffix = el.dataset.suffix||'';
    let n=0; const steps=60; const inc=target/steps;
    const t = setInterval(()=>{
      n = Math.min(n+inc, target);
      el.textContent = (Number.isInteger(target)?Math.floor(n):n.toFixed(1)).toLocaleString('en-IN') + suffix;
      if(n>=target) clearInterval(t);
    },16);
  }
  const cobs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) animateCount(e.target); });
  },{threshold:0.3});
  document.querySelectorAll('[data-count]').forEach(el=>cobs.observe(el));

  // Tabs
  document.addEventListener('click',e=>{
    const tab = e.target.closest('.tab');
    if(!tab) return;
    const group = tab.closest('.tab-group');
    if(!group) return;
    group.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
    tab.classList.add('on');
    const target = tab.dataset.tab;
    group.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('on'));
    const panel = document.getElementById(target);
    if(panel){ panel.classList.add('on'); panel.querySelectorAll('[data-r],[data-r2],[data-r3]').forEach(el=>el.classList.add('in')); }
  });

  // Form submit mock
  document.querySelectorAll('.contact-form').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const ok = form.querySelector('.form-ok');
      if(ok){ ok.style.display='block'; setTimeout(()=>ok.style.display='none',5000); }
      form.reset();
    });
  });

})();
