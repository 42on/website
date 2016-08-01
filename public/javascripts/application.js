$(function() {

    // Smooth anchor scrolling
    // Source: http://codepen.io/oneismore/pen/vLRJPN
    function scrollNav() {
      $('.scroll a').click(function(){
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 55
            // scrollTop: $( $(this).attr('href') ).offset().top
        }, 400);
        return false;
      });
      $('.scrollTop a').scrollTop();
    }
    scrollNav();

    // Mobile collapse fix
    // Toggle navbar when clicked
    $('.navbar-nav a').on('click', function () {
        if (window.innerWidth <= 768) {
            $(".navbar-toggle").click();
        }
    });

    // Google Maps
    // Append to the maps div
    $(".maps-wrapper").html('<iframe class="maps-content" src="https://maps.google.com/maps?hl=nl&q=Park+Veldzigt+31,+Middelburg&ie=UTF8&t=roadmap&z=16&iwloc=B&output=embed" width="100%" height="300" frameborder="0"></iframe>');

    // Turn off scroll + enable again with click
    // Source: http://stackoverflow.com/questions/21992498/disable-mouse-scroll-wheel-zoom-on-embedded-google-maps
    $('.maps-wrapper').click(function () {
        $('.maps-wrapper iframe').css("pointer-events", "auto");
    });

    // Set the default state again
    $('.maps-wrapper').mouseleave(function() {
        $('.maps-wrapper iframe').css("pointer-events", "none");
    });

});
