$(function () {
    var header = $('nav').outerHeight();
    var footer = $('footer').outerHeight();
    var pages = header + footer;
    $('.pages').css('min-height', "calc(100vh - ".concat(pages, "px)"));
    // Owl carousal 
    $('#slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 10,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 5,
                nav: true,
            },
        }
    });
    // slider nav buttons 
    $('#slider span[aria-label="Previous"]').html('<i class="icofont-thin-left"></i>');
    $('#slider span[aria-label="Next"]').html('<i class="icofont-thin-right"></i>');
    $('#slider2').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 10,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 5,
                nav: true,
            },
        }
    });
    // slider2 nav buttons 
    $('#slider2 span[aria-label="Previous"]').html('<i class="icofont-thin-left"></i>');
    $('#slider2 span[aria-label="Next"]').html('<i class="icofont-thin-right"></i>');
});