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
            nextEl: '.btn-slide-home-1.btn-next',  // Chọn phần tử chứa nút next
            prevEl: '.btn-slide-home-1.btn-prev',  // Chọn phần tử chứa nút prev
        },


    });
}
if ((".slider-home-2").length > 0) {
    var swiper = new Swiper(".slider-home-2", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.btn-slide-home-2.btn-next',  // Chọn phần tử chứa nút next
            prevEl: '.btn-slide-home-2.btn-prev',  // Chọn phần tử chứa nút prev
        },
        on: {
            slideChange: function () {
                $('.swiper-slide-active .tlt').each(function () {
                    $(this).textillate({
                        autoStart: true,
                        in: {
                            effect: 'fadeInUp',
                            delayScale: 0.1,
                            delay: 50,
                            sync: false,
                            shuffle: false,
                        },
                        out: {
                            effect: 'fadeOut',
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
if ((".slider-home-3").length > 0) {
    var swiper = new Swiper(".slider-home-3", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.btn-slide-home-3.btn-next',  // Chọn phần tử chứa nút next
            prevEl: '.btn-slide-home-3.btn-prev',  // Chọn phần tử chứa nút prev
        },
    });
}
if ((".slider-provide").length > 0) {
    var swiper = new Swiper(".slider-provide", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        // navigation: {
        //     nextEl: '.btn-slide-home-3.btn-next',  // Chọn phần tử chứa nút next
        //     prevEl: '.btn-slide-home-3.btn-prev',  // Chọn phần tử chứa nút prev
        // },
    });
}
//slider-why-us
if ((".slider-why-us").length > 0) {
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