document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

document.querySelectorAll('.timeline-collapsible').forEach((el) => {
  const collapsedHeight = parseFloat(getComputedStyle(el).maxHeight);
  if (el.scrollHeight <= collapsedHeight + 8) return;

  el.classList.add('has-toggle');

  const btn = document.createElement('button');
  btn.className = 'timeline-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = 'Show full role details <span class="timeline-toggle-icon">↓</span>';
  el.insertAdjacentElement('afterend', btn);

  btn.addEventListener('click', () => {
    const isExpanded = el.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', String(isExpanded));
    btn.innerHTML = isExpanded
      ? 'Show less <span class="timeline-toggle-icon">↓</span>'
      : 'Show full role details <span class="timeline-toggle-icon">↓</span>';
  });
});
