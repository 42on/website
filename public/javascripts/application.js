$(function() {

    // Smooth anchor scrolling
    // http://codepen.io/oneismore/pen/vLRJPN
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

    // Google Maps
    $(".maps-wrapper").html('<iframe class="maps-content" src="https://maps.google.com/maps?hl=nl&q=Londensekaai+1,+Middelburg&ie=UTF8&t=roadmap&z=16&iwloc=B&output=embed" width="100%" height="300" frameborder="0" style="border:0"></iframe>');

});
