document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动效果
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight; // 获取header的高度

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight - 20, // 减去header高度，并额外留出20px间距
                    behavior: 'smooth'
                });
            }

            // 在移动端点击链接后自动关闭菜单
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 响应式导航菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // 在页面滚动时，如果菜单是打开的，也尝试关闭它
    window.addEventListener('scroll', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    console.log('网站脚本已加载。');
});
