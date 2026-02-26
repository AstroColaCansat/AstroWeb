document.addEventListener('DOMContentLoaded', () => {

  const overlay = document.getElementById('startOverlay');

  const btn = document.getElementById('dropdownBtn');
  const menu = document.getElementById('menu');

  function openMenu() { if(menu && btn){ menu.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); } }
  function closeMenu() { if(menu && btn){ menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } }
  function toggleMenu() { menu && btn && (menu.classList.contains('open') ? closeMenu() : openMenu()); }

  if (btn) btn.addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });
  document.addEventListener('click', e => { if(menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });

  const btnInicio = document.getElementById('btnInicio');
  const btnLinks = document.getElementById('btnLinks');
  const btnContacto = document.getElementById('btnContacto');

  if(btnInicio) btnInicio.addEventListener('click', () => { window.location.href = 'inicio.html'; });
  if(btnLinks) btnLinks.addEventListener('click', () => { window.location.href = 'proyectos.html'; });
  if(btnContacto) btnContacto.addEventListener('click', () => { window.location.href = 'contacto.html'; });

  // Fade-in on scroll functionality
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in sections
  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });

});
