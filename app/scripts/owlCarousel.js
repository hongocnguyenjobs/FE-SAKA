"use strict";

/* Owl Carousel */
const owlCarousel = (() => {
    $('.index__owl-carousel').owlCarousel({
        stagePadding: 270,
        loop: true,
        nav: true,
        navText: ["<img src=\"images/ic-prev.svg\" alt=\"\" />", "<img src=\"images/ic-next.svg\" alt=\"\" />"],
        items: 1,
        dots: true,
        responsive: {
            0: {
                stagePadding: 0
            },
            768: {
                stagePadding: 120
            },
            992: {
                stagePadding: 200
            },
            1200: {
                stagePadding: 270
            }
        }
    });
    $('.index__owl-carousel--people-info').owlCarousel({
        loop: false,
        nav: false,
        navText: ["<img src=\"images/ic-prev-2.svg\" alt=\"\" />", "<img src=\"images/ic-next-2.svg\" alt=\"\" />"],
        items: 4,
        dots: false,
        responsive: {
            0: {
                nav: true,
                items: 1,
            },
            576: {
                nav: true,
                items: 2,
            },
            992: {
                nav: true,
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
    $('.soita-ja-kysy-lisaa__owl-carousel').owlCarousel({
        loop: false,
        dots: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        }
    });
})();

export default owlCarousel;