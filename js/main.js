/**

 *

**/

(function ($) {
    ("use strict");


    var videoWrap = function () {
        if ($("div").hasClass("video-wrap")) {
            $(".popup-youtube").magnificPopup({
                type: "iframe",
            });
        }
    };

    var openNavMobile = () => {
        if ($('.header').hasClass('header')) {

            $('.mobile-button').on("click", () => {
                $('.mobile-nav-wrap').toggleClass("active")
                $('body').toggleClass('no-scroll');
            })

            $('.overlay-mobile-nav').on("click", () => {
                $('.mobile-nav-wrap').toggleClass("active")
                $('body').toggleClass('no-scroll');

            })
            $(".mobile-nav-close").on('click', () => {
                $('.mobile-nav-wrap').toggleClass("active")
                $('body').toggleClass('no-scroll');
            })

            $(document).on("click", ".menu-item-has-children-mobile", function () {
                var args = { duration: 200 };
                if ($(this).hasClass("active")) {
                    $(this).children(".sub-menu-mobile").slideUp(args);
                    $(this).removeClass("active");
                } else {
                    $(".sub-menu-mobile").slideUp(args);
                    $(this).children(".sub-menu-mobile").slideDown(args);
                    $(".menu-item-has-children-mobile").removeClass("active");
                    $(this).addClass("active");
                }
            });


        }
    }
    // Dom Ready
    $(function () {
        videoWrap();
        openNavMobile();
    });
})(jQuery);
