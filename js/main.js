$(function() {
    "use strict";
    var nav_offset_top = $('header').height() + 50;

    function navbarFixed() { if ($('.header_area').length) { $(window).scroll(function() { var scroll = $(window).scrollTop(); if (scroll >= nav_offset_top) { $(".header_area").addClass("navbar_fixed"); } else { $(".header_area").removeClass("navbar_fixed"); } }); }; };
    navbarFixed();

    $('li a').click(function(e) {
        //e.preventDefault();
        var $this = $(this);
        $this.closest('ul').find('li.active,a.active').removeClass('active');
        $this.addClass('active');
        $this.parent().addClass('active');

    });
});