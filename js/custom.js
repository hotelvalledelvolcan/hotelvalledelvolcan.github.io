(function($) {

  new WOW().init();

  jQuery(window).load(function() {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
    $('#exampleModal').modal('show')
  });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  $('.carousel').carousel({
      interval: 3000,
      pause: false
  })

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.navbar-nav li a').on('click', function(event) {

      if ($(this).is('a:not([href^="#"])') || $(this).attr("href") == '#') {
        return;
      }
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    $('.page-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

  });
	
	var navMain = $(".navbar-collapse");
	navMain.on("click", "a:not([data-toggle])", null, function () {
	   navMain.collapse('hide');
	});

})(jQuery);
jQuery(document).ready(function () {


    $("#btnContactUs").on('click', function () {
        var formData = new FormData();
        var Nombre = $("#Nombre").val();
        var Email = $("#Email").val();
        var Asunto = $("#Asunto").val();
        var Telefono = $("#Telefono").val();
        var Mensaje = $("#Mensaje").val() + '\n Telefono: ' + Telefono;

        formData.append("name", Nombre);
        formData.append("email", Email);
        formData.append("_subject", Asunto);
        formData.append("message", Mensaje);

        $.ajax({
            type: "POST",
            url: 'https://formsapi.jabwn.com/key/iEgEt3twMpuKiahASSNV',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                $("#sendmessage").show();
                document.getElementById("Nombre").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Asunto").value = "";
                document.getElementById("Telefono").value = "";
                document.getElementById("Mensaje").value = "";
            },
            error: function (error) {
                $("#errormessage").show();
            }
        });
    });

});
