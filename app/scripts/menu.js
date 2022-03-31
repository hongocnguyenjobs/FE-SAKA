"use strict";

/* Main menu */
const menu = (() => {
    // Menu mobile to desktop when resize screen
    let resize;
    $(window).resize(function () {
        clearTimeout(resize);
        resize = setTimeout(function () {
            let w = $(window).width();
            if (w >= 768) {
                let menu = $('#headerMobileMenu');
                if (menu.hasClass('active')) {
                    menu.removeClass('active ');
                    $('body').removeClass('m-lock-y');
                }
            }
        }, 300);
    });

    // Menu mobile
    $('#callHeaderMobileMenu').click(function () {
        let menu = $('#headerMobileMenu');
        if (!menu.hasClass('active')) {
            $('.header-mobile__ic-menu').hide();
            $('.header-mobile__ic-menu-close').show();
            menu.addClass('active ');
            $('body').addClass('m-lock-y');
        } else {
            $('.header-mobile__ic-menu').show();
            $('.header-mobile__ic-menu-close').hide();
            menu.removeClass('active ');
            $('body').removeClass('m-lock-y');
        }
    });
})();

export default menu;