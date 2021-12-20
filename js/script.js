$(function(){
    // Menuボタンをクリックしたときの処理
    $(".p-menu-button__open").click(function () {
        $(this).toggleClass('open');
        $(".l-grid__item3").toggleClass('open');
        $(".p-menu-button__close").toggleClass('active');
        $("body").toggleClass('fixed');
        $(".c-overlay").fadeToggle(600);
    });

    // 閉じるボタンをクリックしたときの処理
    $(".p-menu-button__close").click(function () {
        $(this).removeClass('active');
        $(".p-menu-button__open").removeClass('open');
        $(".l-grid__item3").removeClass('open');
        $("body").removeClass('fixed');
        $(".c-overlay").fadeOut();
    });
    
    // サイドバー内のリンクをクリックしたときの処理
    $(".p-sidebar a").click(function () {
        $(".p-menu-button__open").removeClass('open');
        $(".l-grid__item3").removeClass('open');
        $("body").removeClass('fixed');
        $(".p-menu-button__close").removeClass('active');
        $(".c-overlay").fadeOut();
    });

    // サイドバーの領域外をクリックしたときの処理
    $(".c-overlay").click(function () {
        $(".p-menu-button__open").removeClass('open');
        $(".l-grid__item3").removeClass('open');
        $("body").removeClass('fixed');
        $(".p-menu-button__close").removeClass('active');
        $(".c-overlay").fadeOut();
    });

    // 画面がリサイズされたときの処理
    $(window).resize(function(){
        $(".p-menu-button__open").removeClass('open');
        $(".l-grid__item3").removeClass('open');
        $("body").removeClass('fixed');
        $(".p-menu-button__close").removeClass('active');
        $(".c-overlay").fadeOut();
    });
});