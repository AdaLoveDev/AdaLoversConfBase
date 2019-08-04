$(function() {
    "use strict";
    var nav_offset_top = $('header').height() + 50;

    $('li a').click(function(e) {
        //e.preventDefault();
        var $this = $(this);
        $this.closest('ul').find('li.active,a.active').removeClass('active');
        $this.addClass('active');
        $this.parent().addClass('active');

    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});