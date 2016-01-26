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

});
