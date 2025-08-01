/**
 * 株式会社結城興業 ウェブサイト JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // スクロールアニメーション
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll')
        .forEach(el => observer.observe(el));
});
