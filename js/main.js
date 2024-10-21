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

    var btnLoadMore = function () {
        $(".btn-loadMore").click(function () {
            // Lấy container liên quan đến nút Load More được nhấn
            var container = $(this).closest(".widget-content-inner");

            // Tìm các item ẩn trong container đó
            var hiddenItems = container.find(".item.hidden");

            // Hiển thị tối đa 1 item mỗi lần nhấn nút với hiệu ứng fadeIn
            hiddenItems.slice(0, 1).each(function (index) {
                $(this)
                    .removeClass("hidden")
                    .hide()
                    .fadeIn(400 * (index + 1));
            });

            // Nếu không còn item nào bị ẩn, ẩn nút Load More trong container hiện tại
            if (container.find(".item.hidden").length === 0) {
                $(this).hide();
            }
        });
    };
    var colorList = function () {
        $(".color-list li").on("click", function () {
            // Xóa class "active" khỏi tất cả các thẻ li
            $(".color-list li").removeClass("active");

            // Thêm class "active" vào thẻ li được bấm
            $(this).addClass("active");
        });
    };
    var rangeslider = function () {
        if ($("#range-two-val").length > 0) {
            var skipSlider = document.getElementById("range-two-val");
            var skipValues = [
                document.getElementById("skip-value-lower"),
                document.getElementById("skip-value-upper"),
            ];

            noUiSlider.create(skipSlider, {
                start: [1, 500],
                connect: true,
                behaviour: "drag",
                step: 1,
                range: {
                    min: 10,
                    max: 1000,
                },
                format: {
                    to: function (value) {
                        return Math.round(value); // Bỏ phần thập phân
                    },
                    from: function (value) {
                        return Number(value); // Chuyển đổi giá trị từ chuỗi sang số
                    },
                },
            });

            skipSlider.noUiSlider.on("update", function (values, handle) {
                skipValues[handle].innerHTML = "$" + values[handle];
            });
        }
    };
    var visibleHeader = function () {
        let lastScrollTop = 0;
        $(window).scroll(function () {
            let scrollTop = $(this).scrollTop();
            if (scrollTop < lastScrollTop) {
                if (scrollTop > 0) {
                    $('.fixed-header.style-absolute').addClass('visible');
                }
            } else {
                $('.fixed-header.style-absolute').removeClass('visible');
            }
            if (scrollTop < 200) {
                $('.fixed-header.style-absolute').removeClass('visible');
            }

            lastScrollTop = scrollTop;
        });

    }
    // Dom Ready
    $(function () {
        videoWrap();
        openNavMobile();
        textUp();
        openWelcome();
        // headerScroll();
        btnQuantity();
        tabs();
        changeValue();
        dayTimeInput();
        btnLoadMore();
        colorList();
        rangeslider();
        visibleHeader();
    });
})(jQuery);
