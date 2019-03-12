$(document).ready(function() {

    /* For scroll on button click*/
    $('.js--scroll-to-composition').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-composition').offset().top}, 1000);
    });

    $('.js--scroll-to-header').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 1000);
    });


    /*For fade animation*/
    jQuery(function($) {

        // Function which adds the 'animated' class to any '.animatable' in view
        var doAnimations = function() {
          
          // Calc current offset and get all animatables
          var offset = $(window).scrollTop() + $(window).height(),
              $animatables = $('.animatable');
          
          // Unbind scroll handler if we have no animatables
          if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
          }
          
          // Check all animatables and animate them if necessary
              $animatables.each(function(i) {
             var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');
                }
          });      
          };
        
        // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');
      
      });

      
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});