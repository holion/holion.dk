/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

if ($.cookie('themeCSSpath')) {
    $('link#theme-stylesheet').attr('href', $.cookie('themeCSSpath'))
}
if ($.cookie('themeLayout')) {
    $('body').addClass($.cookie('themeLayout'))
}

$(function () {
    sliderHomepage()
    sliders()
    fullScreenContainer()
    productDetailGallery(4000)
    menuSliding()
    productDetailSizes()
    utils()
    animations()
    counters()
    checkForMessageSentInIE()
    contactFormAjax()
})

function checkForMessageSentInIE() {
    if (window.location.href.indexOf('messageSent=true') > 0)
        showMessageSent();
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

function contactFormAjax() {
    var contactForm = document.getElementById("contact-form");
    if (!contactForm)
        return;

    if (detectIE())
        return;

    contactForm.onsubmit = function (event) {
        event.preventDefault();

        var payload = {};

        contactForm.querySelectorAll("input, textarea").forEach(function (field) {
            payload[field.name] = field.value;
            field.readOnly = true;
        });
        $('#contact-message').empty();

        payload["websiteName"] = "holion";

        fetch(contactForm.action, {
            method: 'post',
            body: JSON.stringify(payload)
        }).then(function (response) {
            contactForm.querySelectorAll("input, textarea").forEach(function (field) {
                field.readOnly = false;
            });

            if (!response.ok) {
                $('#contact-message')
                    .html('<div class="alert alert-danger" role="alert">Åhh nej. Noget gik galt og beskeden kunne ikke sendes. Prøv evt. igen. Hvis det stadig ikke fungerer håber vi, at du vil kontakte os på anden vis - og også gerne fortælle os om dette problem.</div>')
                    .fadeIn()
                console.error(response);
                return;
            }
            contactForm.reset();

            showMessageSent();
        });
        return false
    };
}

function showMessageSent() {
    $('#contact-message')
        .html('<div class="alert alert-success" role="alert">Tak for din besked. Vi vender tilbage så hurtigt som muligt.</div>')
        .fadeIn()
}

/* slider homepage */
function sliderHomepage() {
    if ($('#slider').length) {
        // var owl = $('#slider')

        $('#slider').owlCarousel({
            autoPlay: 3000,
            items: 4,
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 3],
            itemsMobile: [500, 2]
        })
    }
}

/* sliders */
function sliders() {
    if ($('.owl-carousel').length) {
        $(".customers").owlCarousel({
          items: 6,
          itemsDesktopSmall: [990, 4],
          itemsTablet: [767, 2],
          itemsMobile: [480, 1],
        });

        $(".owl-carousel.testimonials").owlCarousel({
          autoPlay: 12000,
          stopOnHover: true,
          items: 1,
          itemsDesktop: 1,
          navigation: true,
          navigationText: [
            "<i class='fa fa fa-long-arrow-left'></i>",
            "<i class='fa fa fa-long-arrow-right'></i>",
          ],

          itemsDesktopSmall: [990, 1],
          itemsTablet: [767, 1.2],
          itemsMobile: [480, 1.2],
        });

        $(".owl-carousel.csr").owlCarousel({
          autoPlay: 3000,
          stopOnHover: true,
          items: 3,
          itemsDesktop: 1,
          itemsDesktopSmall: [990, 1],
          itemsTablet: [767, 1.2],
          itemsMobile: [480, 1.2],
        });

        $('.project').owlCarousel({
            navigation: true, // Show next and prev buttons
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            stopOnHover: true,
            singleItem: true,
            afterInit: '',
            lazyLoad: true
        })

        $('.homepage').owlCarousel({
            navigation: false, // Show next and prev buttons
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideSpeed: 2000,
            paginationSpeed: 1000,
            autoPlay: true,
            stopOnHover: true,
            singleItem: true,
            lazyLoad: false,
            addClassActive: true,
            afterInit: function () {
                // animationsSlider()
            },
            afterMove: function () {
                // animationsSlider()
            }
        })
    }
}

/* menu sliding */
function menuSliding() {
    $('.dropdown').on('show.bs.dropdown', function () {
        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown()
        } else {
            $(this).find('.dropdown-menu').first().stop(true, true).show()
        }
    })

    $('.dropdown').on('hide.bs.dropdown', function () {
        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
        } else {
            $(this).find('.dropdown-menu').first().stop(true, true).hide()
        }
    })
}

/* animations */
function animations() {
    var delayTime = 0
    $('[data-animate]').css({ opacity: '0' })
    $('[data-animate]').waypoint(function () {
        delayTime += 150
        $(this).delay(delayTime).queue(function (next) {
            $(this).toggleClass('animated')
            $(this).toggleClass($(this).data('animate'))
            delayTime = 0
            next()
            // $(this).removeClass('animated')
            // $(this).toggleClass($(this).data('animate'))
        })
    }, {
        offset: '90%',
        triggerOnce: true
    })

    $('[data-animate-hover]').hover(function () {
        $(this).css({ opacity: 1 })
        $(this).addClass('animated')
        $(this).removeClass($(this).data('animate'))
        $(this).addClass($(this).data('animate-hover'))
    }, function () {
        $(this).removeClass('animated')
        $(this).removeClass($(this).data('animate-hover'))
    })
}

function animationsSlider() {
    var delayTimeSlider = 400

    $('.owl-item:not(.active) [data-animate-always]').each(function () {
        $(this).removeClass('animated')
        $(this).removeClass($(this).data('animate-always'))
        $(this).stop(true, true, true).css({ opacity: 0 })
    })

    $('.owl-item.active [data-animate-always]').each(function () {
        delayTimeSlider += 500

        $(this).delay(delayTimeSlider).queue(function () {
            $(this).addClass('animated')
            $(this).addClass($(this).data('animate-always'))

            console.log($(this).data('animate-always'))
        })
    })
}

/* counters */
function counters() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    })
}

/* picture zoom */
function pictureZoom() {
    $('.product .image, .post .image, .photostream div').each(function () {
        var imgHeight = $(this).find('img').height()
        if (imgHeight) {
            $(this).height(imgHeight)
        }
    })
}

/* full screen intro */
function fullScreenContainer() {
    var screenWidth = $(window).width() + 'px'
    var screenHeight = '500px'

    if ($(window).height() > 500) {
        screenHeight = $(window).height() + 'px'
    }

    $('#intro, #intro .item').css({
        width: screenWidth,
        height: screenHeight
    })
}

function utils() {
    /* tooltips */
    $('[data-toggle="tooltip"]').tooltip()

    /* click on the box activates the radio */
    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function () {
        var radio = $(this).find(':radio')
        radio.prop('checked', true)
    })

    /* click on the box activates the link in it */
    $('.box.clickable').on('click', function () {
        window.location = $(this).find('a').attr('href')
    })

    /* external links in new window */
    $('.external').on('click', function (e) {
        e.preventDefault()
        window.open($(this).attr('href'))
    })

    /* animated scrolling */
    $('.scroll-to, .scroll-to-top').click(function (event) {
        var fullUrl = this.href
        var parts = fullUrl.split('#')

        if (parts.length > 1) {
            scrollTo(fullUrl)
            event.preventDefault()
        }
    })

    function scrollTo(fullUrl) {
        var parts = fullUrl.split('#')
        var trgt = parts[1]
        var targetOffset = $('#' + trgt).offset()
        var targetTop = targetOffset.top - 100

        if (targetTop < 0) {
            targetTop = 0
        }

        $('html, body').animate({
            scrollTop: targetTop
        }, 1000)
    }
}

/* product detail gallery */
function productDetailGallery(confDetailSwitch) {
    $('.thumb:first').addClass('active')
    var timer = setInterval(autoSwitch, confDetailSwitch)

    $('.thumb').click(function (e) {
        switchImage($(this))
        clearInterval(timer)
        timer = setInterval(autoSwitch, confDetailSwitch)
        e.preventDefault()
    })

    $('#mainImage').hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(autoSwitch, confDetailSwitch)
    })

    function autoSwitch() {
        var nextThumb = $('.thumb.active').closest('div').next('div').find('.thumb')
        if (nextThumb.length === 0) {
            nextThumb = $('.thumb:first')
        }
        switchImage(nextThumb)
    }

    function switchImage(thumb) {
        $('.thumb').removeClass('active')
        var bigUrl = thumb.attr('href')
        thumb.addClass('active')
        $('#mainImage img').attr('src', bigUrl)
    }
}

/* product detail sizes */
function productDetailSizes() {
    $('.sizes a').click(function (e) {
        e.preventDefault()
        $('.sizes a').removeClass('active')
        $('.size-input').prop('checked', false)
        $(this).addClass('active')
        $(this).next('input').prop('checked', true)
    })
}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {
        var maxHeight = 0
        var children = $(this).find('.same-height')
        children.height('auto')

        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight()
                }
            })
            children.innerHeight(maxHeight)
        }

        maxHeight = 0
        children = $(this).find('.same-height-always')
        children.height('auto')
        children.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).innerHeight()
            }
        })
        children.innerHeight(maxHeight)
    })
}

var windowWidth
$(function () {
    windowWidth = $(window).width()

    $(this).alignElementsSameHeight()
    pictureZoom()
})

$(window).resize(function () {
    var newWindowWidth = $(window).width()

    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight()
            fullScreenContainer()
            pictureZoom()
        }, 205)
        windowWidth = newWindowWidth
    }
})
