// 简单的平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 你可以在这里添加更多交互功能，例如表单验证、动态加载等。
// 目前这个网站功能简单，不需要复杂脚本。
