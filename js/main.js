/**

    * videoWrap();
    * openNavMobile();
    * textUp();
    * openWelcome();
    * headerScroll();
    * btnQuantity();

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
        if ($(".header").hasClass("header")) {
            $(".mobile-button").on("click", () => {
                $(".mobile-nav-wrap").toggleClass("active");
                $("body").toggleClass("no-scroll");
            });

            $(".overlay-mobile-nav").on("click", () => {
                $(".mobile-nav-wrap").toggleClass("active");
                $("body").toggleClass("no-scroll");
            });
            $(".mobile-nav-close").on("click", () => {
                $(".mobile-nav-wrap").toggleClass("active");
                $("body").toggleClass("no-scroll");
            });

            $(document).on(
                "click",
                ".menu-item-has-children-mobile",
                function () {
                    var args = { duration: 200 };
                    if ($(this).hasClass("active")) {
                        $(this).children(".sub-menu-mobile").slideUp(args);
                        $(this).removeClass("active");
                    } else {
                        $(".sub-menu-mobile").slideUp(args);
                        $(this).children(".sub-menu-mobile").slideDown(args);
                        $(".menu-item-has-children-mobile").removeClass(
                            "active"
                        );
                        $(this).addClass("active");
                    }
                }
            );
        }
    };
    var textUp = function () {
        const $textElement = $(".text-move-up");
        const text = $textElement.text();
        $textElement.html(""); // Xoá nội dung cũ

        // Chèn từng chữ vào <span>
        $.each(text.split(""), function (index, char) {
            const $span = $("<span>").text(char);
            $textElement.append($span);

            // Thêm độ trễ cho mỗi chữ cái
            setTimeout(function () {
                $span.css({
                    transform: "translateY(0)",
                    opacity: "1",
                });
            }, index * 100); // Delay 100ms giữa mỗi chữ cái
        });
    };

    var openWelcome = function () {
        $(".btn-open-welcome").on("click", () => {
            $(".welcome-wrap").toggleClass("active");
            // $(".btn-open-welcome").toggleClass("active");
        });

        $(".btn-close-welcome").on("click", () => {
            $(".welcome-wrap").toggleClass("active");
            // $(".btn-open-welcome").toggleClass("active");
        });
    };

    var headerScroll = function () {
        if ($(".header").length > 0) {
            let didScroll;
            let lastScrollTop = 0;
            let delta = 5;
            let navbarHeight = $(".header").outerHeight();
            $(window).scroll(function (event) {
                if ($(this).scrollTop() > 500) {
                    didScroll = true;
                } else {
                    didScroll = false;
                    if ($(this).scrollTop() === 0) {
                        $(".header").removeClass("scrollHeader");
                    }
                }
            });

            setInterval(function () {
                if (didScroll) {
                    let st = $(this).scrollTop();
                    // Make scroll more than delta
                    if (Math.abs(lastScrollTop - st) <= delta) return;

                    // If scrolled down and past the navbar, add class .nav-up.
                    if (st > lastScrollTop && st > navbarHeight) {
                        // Scroll Down
                        $(".header").css("top", `-${navbarHeight + 50}px`);
                    } else {
                        // Scroll Up
                        if (st + $(window).height() < $(document).height()) {
                            $(".header").addClass("scrollHeader");
                            $(".header").css("top", `-1px`);
                        }
                    }

                    lastScrollTop = st;
                    didScroll = false;
                }
            }, 250);
        }
    };

    //btnQuantity
    var btnQuantity = function () {
        $(".minus-btn").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.closest("div").find("input");
            var value = parseInt($input.val());

            if (value > 1) {
                value = value - 1;
            }

            $input.val(value);
        });

        $(".plus-btn").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.closest("div").find("input");
            var value = parseInt($input.val());

            if (value > 0) {
                value = value + 1;
            }

            $input.val(value);
        });
    };
    var tabs = function () {
        $(".wg-tabs").each(function () {
            $(this).find(".widget-content-tab").children().hide();
            $(this).find(".widget-content-tab").children(".active").show();
            $(this)
                .find(".menu-tab")
                .children(".item")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".wg-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".wg-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
    };
    //
    //changeValue
    var changeValue = function () {
        if ($(".tf-dropdown-sort").length > 0) {
            $(".select-item").click(function (event) {
                $(this)
                    .closest(".tf-dropdown-sort")
                    .find(".text-sort-value")
                    .text($(this).find(".text-value-item").text());

                $(this)
                    .closest(".dropdown-menu")
                    .find(".select-item.active")
                    .removeClass("active");

                $(this).addClass("active");
            });
        }
    };

    var dayTimeInput = function () {
        if ($(".choose-date").length > 0) {
            $("#day").on("focus", function () {
                $(".choose-date").addClass("has-value"); // Thêm class khi input được click
            });

            $("#day").on("blur", function () {
                if (!$(this).val()) {
                    $(".choose-date").removeClass("has-value"); // Xóa class nếu không có giá trị khi rời khỏi input
                }
            });
        }
        if ($(".choose-date-2").length > 0) {
            $("#time").on("focus", function () {
                $(".choose-date-2").addClass("has-value"); // Thêm class khi input được click
            });

            $("#time").on("blur", function () {
                if (!$(this).val()) {
                    $(".choose-date-2").removeClass("has-value"); // Xóa class nếu không có giá trị khi rời khỏi input
                }
            });
        }
        if ($(".amount").length > 0) {
            $("#positiveNumber").on("input", function () {
                // Lấy giá trị nhập vào
                let value = $(this).val();

                // Kiểm tra và loại bỏ dấu trừ
                if (value.includes("-")) {
                    $(this).val(value.replace(/-/g, ""));
                }

                // Kiểm tra và loại bỏ số 0
                if (value === "0" || value === "") {
                    $(this).val(""); // Xóa giá trị nếu là 0 hoặc chuỗi rỗng
                }

                // Chỉ cho phép nhập các số dương (1 trở lên)
                const numValue = parseInt(value, 10);
                if (numValue < 1) {
                    $(this).val(""); // Xóa giá trị nếu là số âm
                }
            });
        }
    };
    var timeInput = function () {};
    // Dom Ready
    $(function () {
        videoWrap();
        openNavMobile();
        textUp();
        openWelcome();
        headerScroll();
        btnQuantity();
        tabs();
        changeValue();
        dayTimeInput();
        // timeInput();
    });
})(jQuery);
