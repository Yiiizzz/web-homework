// 1) 滚动加阴影
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 6);
});

// 2) 汉堡菜单展开/收起
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
btn.addEventListener('click', () => nav.classList.toggle('open'));

// 3) 点击导航后关闭菜单 + 平滑滚动由 CSS 实现（scroll-behavior）
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// 4) 表单简单校验
const form = document.getElementById('contactForm');
const tip = form.querySelector('.form-tip');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    tip.textContent = '请填写完整：姓名、邮箱、内容';
    return;
  }
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!ok) { tip.textContent = '邮箱格式不正确'; return; }
  tip.style.color = '#16a34a';
  tip.textContent = '提交成功（示例，无后台）';
  form.reset();
  setTimeout(() => tip.textContent = '', 2000);
});

// 5) 技能条动画（进入视口时填充）
const bars = document.querySelectorAll('.skill-bars .bar');
const io = new IntersectionObserver(entries => {
  entries.forEach(it => {
    if (it.isIntersecting) {
      const p = it.target.dataset.percent || 0;
      it.target.style.setProperty('--p', p);
      io.unobserve(it.target);
    }
  });
}, { threshold: 0.5 });
bars.forEach(b => io.observe(b));
