// ═══════════════════════════════════════
//  NEXUS Portal — shared script.js
// ═══════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {

  // ── Active nav highlight ──
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Toast notifications ──
  window.showToast = function(msg, type = 'success') {
    let container = document.getElementById('toast');
    if (!container) { container = document.createElement('div'); container.id = 'toast'; document.body.appendChild(container); }
    const t = document.createElement('div');
    t.className = 'toast-msg' + (type === 'error' ? ' error' : '');
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  };

  // ── Modal helpers ──
  window.openModal = function(id) { document.getElementById(id).classList.add('open'); };
  window.closeModal = function(id) { document.getElementById(id).classList.remove('open'); };
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
  });

  // ── Feature card glow ──
  document.querySelectorAll('.card, .proj-card, .shop-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

});
