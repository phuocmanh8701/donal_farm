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
    // Dom Ready
    $(function () {
        videoWrap();
    });
})(jQuery);
