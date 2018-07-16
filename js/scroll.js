jQuery(document).ready(function($) {

$(window).scroll(function(event) {

  var y1 = $(this).scrollTop();

  if (y1 >= 270) {

    $('#skillsbox').addClass('animated');
    $('#skillsbox').addClass('zoomIn');

    }

    var y2 = $(this).scrollTop();

    if (y2 >= 800) {

      $('.portfoliobox').addClass('animated');
      $('.portfoliobox').addClass('fadeIn');

      }

    var y3 = $(this).scrollTop();

    if (y3 >= 1600) {

      $('#formbox').addClass('animated');
      $('#formbox').addClass('fadeIn');

    }

  });

});
