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
    var textUp = function () {
        const $textElement = $('.text-move-up');
        const text = $textElement.text();
        $textElement.html(''); // Xoá nội dung cũ

        // Chèn từng chữ vào <span>
        $.each(text.split(''), function (index, char) {
            const $span = $('<span>').text(char);
            $textElement.append($span);

            // Thêm độ trễ cho mỗi chữ cái
            setTimeout(function () {
                $span.css({
                    'transform': 'translateY(0)',
                    'opacity': '1'
                });
            }, index * 100); // Delay 100ms giữa mỗi chữ cái
        });
    }
    // Dom Ready
    $(function () {
        videoWrap();
        openNavMobile();
        // counter();
        textUp();
    });
})(jQuery);
