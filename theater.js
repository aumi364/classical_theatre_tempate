/* eslint-disable */

/// <reference path="jquery-2.1.3.min.js" />
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.title').css({
        'transform': 'translate(0px,' + wScroll / 4.8 + '%) '
    });
    $('.logo').css({
        'transform': 'translate(0px,-' + wScroll / 25 + '%)'
    });
    console.log(wScroll);
    if (wScroll > $('.gallery').offset().top - ($(window).height() / 1.3)) {

        $('.gallery .col').each(function(i) {
            setTimeout(function() {
                $('.gallery .col').eq(i).addClass('is-showing');
            }, 150 * (i + 1));

        });
    }
    if (wScroll > $('.upcoming_event').offset().top - $(window).height()) {
        var w = $('.date').width() - $('.date>h1').width();
        var w1 = $('.day').width() - $('.day>h1').width();

        var offset = Math.max(0, wScroll - $('.date').offset().top + w);
        var offset1 = Math.max(0, wScroll - $('.date').offset().top + w1);
        console.log("offset " + offset);
        console.log("width" + w);
        if (offset > w) {
            offset = w;
        }
        if (offset1 > w1) {
            offset1 = w1;
        }
        $('.date>h1').css({
            'transform': 'translate(' + offset + 'px)'
        });
        $('.day>h1').css({
            'transform': 'translate(-' + offset1 + 'px)'
        });


    }
});
$(window).ready(function() {

    var index = 0;
    showSlides();

    function showSlides() {

        var slides = $('.slide');

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        index++;
        if (index > slides.length) {
            index = 1;
        }
        slides.addClass("sliderStyle");
        slides[index - 1].style.display = "block";
        setTimeout(showSlides, 5000);
    }


});