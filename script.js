// 主題切換
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const userTheme = localStorage.getItem('theme');
if (userTheme === 'light' || (!userTheme && !prefersDark)) {
  document.body.classList.add('light');
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  }
});

// 自我介紹展開/收合
const aboutToggle = document.getElementById('aboutToggle');
const aboutContent = document.getElementById('aboutContent');
let aboutOpen = true;
aboutToggle.addEventListener('click', () => {
  aboutOpen = !aboutOpen;
  aboutContent.classList.toggle('closed', !aboutOpen);
  aboutToggle.classList.toggle('rotate', !aboutOpen);
});

// 頁面滑入動畫
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);