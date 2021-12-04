$(function(){
    // ハンバーガーメニューをクリックしたときの処理
    $(".p-header__button").click(function () {
        $(this).toggleClass('open');
        $(".l-grid__item3").toggleClass('open');
        $(".c-overlay").fadeToggle(600);
    });
    
    // ハンバーガーメニューのリンクをクリックしたときの処理
    $(".p-sidebar a").click(function () {
        $(".p-header__button").removeClass('open');
        $(".l-grid__item3").removeClass('open');
        $(".c-overlay").fadeOut();
    });

    // 画面がリサイズされたときの処理
    $(window).resize(function(){
    $(".p-header__button").removeClass('open');
    $(".l-grid__item3").removeClass('open');
    $(".c-overlay").fadeOut();
    });
});