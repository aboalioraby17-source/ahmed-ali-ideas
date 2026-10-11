const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
    document.querySelectorAll('.nav-links a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  themeToggle.textContent = light ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', light ? 'تفعيل المظهر الداكن' : 'تفعيل المظهر الفاتح');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

// غيّر هذا البريد إلى بريدك الحقيقي عند الرغبة.
document.getElementById('contactButton').addEventListener('click', event => {
  if (event.currentTarget.getAttribute('href') === 'mailto:hello@example.com') {
    event.preventDefault();
    alert('هذا رابط تجريبي. افتح index.html وعدّل hello@example.com إلى بريدك.');
  }
});
