document.addEventListener("DOMContentLoaded", function () {
    // サムネイルを取得
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.getElementById('overlay');
    const overlaySvg = document.getElementById('overlaySvg');

    // サムネイルをクリックしたらオーバーレイを表示
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const largeImageSrc = this.getAttribute('data-large'); // 大きいSVG

            if (largeImageSrc) {
                overlaySvg.src = largeImageSrc;
                overlay.style.display = 'flex'; // オーバーレイを表示
            } else {
                console.error("data-large 属性が見つかりません");
            }
        });
    });

    // オーバーレイをクリックしたら閉じる
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none'; // オーバーレイを非表示
    });
});
