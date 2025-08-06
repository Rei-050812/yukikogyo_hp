/**
 * 株式会社結城興業 ウェブサイト JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // スクロールアニメーションの初期化
    setTimeout(() => {
        // アニメーション準備完了クラスを追加
        document.body.classList.add('js-animation-ready');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.animate-on-scroll')
            .forEach(el => observer.observe(el));
    }, 100); // 少しの遅延を加えてDOMが確実に読み込まれていることを確認
});
