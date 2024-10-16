// if ((".slider-page-title-home-1").length > 0) {
//     var swiper = new Swiper(".slider-page-title-home-1", {
//         slidesPerView: 1,
//         loop: true,

//     });
// }

if ($(".slider-home-1").length > 0) {
    var swiper = new Swiper(".slider-home-1", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            // delay: 4000,  // Thời gian giữa mỗi lần chuyển slide
            // disableOnInteraction: false,  // Để autoplay không bị dừng khi tương tác với Swiper
        },
        navigation: {
            nextEl: ".btn-slide-home-1.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slide-home-1.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}
if (".slider-home-2".length > 0) {
    var swiper = new Swiper(".slider-home-2", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".btn-slide-home-2.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slide-home-2.btn-prev", // Chọn phần tử chứa nút prev
        },
        autoplay: {
            delay: 4000, // Thời gian giữa mỗi lần chuyển slide
            disableOnInteraction: false, // Để autoplay không bị dừng khi tương tác với Swiper
        },
        on: {
            slideChange: function () {
                $(".swiper-slide-active .tlt").each(function () {
                    $(this).textillate({
                        autoStart: true,
                        in: {
                            effect: "fadeInUp",
                            delayScale: 0.1,
                            delay: 50,
                            sync: false,
                            shuffle: false,
                        },
                        out: {
                            effect: "fadeOut",
                            delayScale: 0.1,
                            delay: 50,
                            sync: true,
                            shuffle: false,
                        },
                        loop: true,
                    });
                });
            },
        },
    });
}
if (".slider-home-3".length > 0) {
    var swiper = new Swiper(".slider-home-3", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000, // Thời gian giữa mỗi lần chuyển slide
            disableOnInteraction: false, // Để autoplay không bị dừng khi tương tác với Swiper
        },
        navigation: {
            nextEl: ".btn-slide-home-3.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slide-home-3.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}
if (".slider-provide".length > 0) {
    var swiper = new Swiper(".slider-provide", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btn-slider-provide.style-2.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slider-provide.style-2.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}
//slider-why-us
if (".slider-why-us".length > 0) {
    var swiper = new Swiper(".slider-why-us", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        // navigation: {
        //     nextEl: '.btn-slide-home-3.btn-next',  // Chọn phần tử chứa nút next
        //     prevEl: '.btn-slide-home-3.btn-prev',  // Chọn phần tử chứa nút prev
        // },
    });
}
//slider-partner

if (".slider-partner".length > 0) {
    var swiper = new Swiper(".slider-partner", {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 70,
        autoplay: {
            pauseOnMouseEnter: true,
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 7000,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            450: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            868: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 90,
            },
        },
    });
}
//thumbs

if ($(".thumbs-slider").length > 0) {
    var direction = $(".tf-product-media-thumbs").data("direction");
    var thumbs = new Swiper(".tf-product-media-thumbs", {
        spaceBetween: 20,
        slidesPerView: "3",
        initialSlide: 1,
        slideTo: 1,
        direction: "vertical",
        observer: true,
        observeParents: true,
        breakpoints: {
            0: {
                direction: "horizontal",
                slidesPerView: 3,
            },
            1150: {
                direction: "horizontal",
                direction: direction,
            },
        },
        450: {
            direction: "horizontal",
        },
    });
    var main = new Swiper(".tf-product-media-main", {
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: thumbs,
        },
    });
}
if ($(".testimonial-thumbs").length > 0) {
    var direction = $(".slider-testimonial-3-thumb").data("direction");
    var thumbs = new Swiper(".slider-testimonial-3-thumb", {
        spaceBetween: 30,
        slidesPerView: 3,
        // initialSlide: 1,
        // slideTo: 1,
        direction: "horizontal",
        // observer: true,
        // observeParents: true,
        // breakpoints: {
        //     0: {
        //         direction: "horizontal",
        //         slidesPerView: 3,
        //     },
        //     1150: {
        //         direction: "horizontal",
        //         direction: direction,
        //     },
        // },
        // 450: {
        //     direction: "horizontal",
        // },
    });
    var main = new Swiper(".slider-testimonial-3", {
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: thumbs,
        },
        navigation: {
            nextEl: ".btn-slide-testimonial-3.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slide-testimonial-3.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}

if (".slider-s-project".length > 0) {
    var swiper = new Swiper(".slider-s-project", {
        slidesPerView: 2,
        loop: true,
        // centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination.pagination-s-project", // Kích hoạt pagination
            clickable: true, // Cho phép click vào pagination để điều hướng
        },
    });
}

if (".slider-s-testimonial".length > 0) {
    var swiper = new Swiper(".slider-s-testimonial", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".btn-s-testimonial.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-s-testimonial.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}

//slider-box-event

if (".slider-box-event".length > 0) {
    var swiper = new Swiper(".slider-box-event", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 28,
        // navigation: {
        //     nextEl: '.btn-slide-home-3.btn-next',  // Chọn phần tử chứa nút next
        //     prevEl: '.btn-slide-home-3.btn-prev',  // Chọn phần tử chứa nút prev
        // },
    });
}

// slider-blog-post

if (".slider-blog-post".length > 0) {
    var swiper = new Swiper(".slider-blog-post", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btn-s-blog-post.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-s-blog-post.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}
// slider-s-service-2
if (".slider-s-service-2".length > 0) {
    var swiper = new Swiper(".slider-s-service-2", {
        slidesPerView: 2.7,
        // loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btn-s-service-2.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-s-service-2.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}
// slider-s-testimonial-2
if (".slider-s-testimonial-2".length > 0) {
    var swiper = new Swiper(".slider-s-testimonial-2", {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btn-slide-testimonial-2.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slide-testimonial-2.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}
// slider-s-our-mission

if (".slider-s-our-mission".length > 0) {
    var swiper = new Swiper(".slider-s-our-mission", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".btn-slide-our-mission.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slide-our-mission.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}

if (".slider-project-2".length > 0) {
    var swiper = new Swiper(".slider-project-2", {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,

        navigation: {
            nextEl: ".btn-slide-project-2.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slide-project-2.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}

if (".slider-shopping-card".length > 0) {
    var swiper = new Swiper(".slider-shopping-card", {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btn-slider-shopping.btn-next", // Chọn phần tử chứa nút next
            prevEl: ".btn-slider-shopping.btn-prev", // Chọn phần tử chứa nút prev
        },
    });
}
// silder-gallery
if (".slider-gallery".length > 0) {
    var swiper = new Swiper(".slider-gallery", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        // navigation: {
        //     nextEl: '.btn-slide-home-3.btn-next',  // Chọn phần tử chứa nút next
        //     prevEl: '.btn-slide-home-3.btn-prev',  // Chọn phần tử chứa nút prev
        // },
    });
}
