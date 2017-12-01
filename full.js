$(document).ready(function() {


  $(".item1").click(function() {
    $(".item img").animate({
      opacity: 0
    }, 'fast');
    $("#myCarousel").carousel(0);


    $(".item img").animate({
      opacity: 1
    }, 1000);
  });
  $(".item2").click(function() {
    $(".item img").animate({
      opacity: 0
    }, 'fast');
    $("#myCarousel").carousel(1);

    $(".item img").animate({
      opacity: 1
    }, 1000);
  });
  $(".item3").click(function() {
    $(".item img").animate({
      opacity: 0
    }, 'fast');
    $("#myCarousel").carousel(2);

    $(".item img").animate({
      opacity: 1
    }, 1000);
  });


  // Enable Carousel Controls
  $(".left").click(function() {
    $(".item img").animate({
      opacity: 0
    }, 'fast');
    $("#myCarousel").carousel("prev");

    $(".item img").animate({
      opacity: 1
    }, 1000);

  });
  $(".right").click(function() {
    $(".item img").animate({
      opacity: 0
    }, 'fast');

    $("#myCarousel").carousel("next");

    $(".item img").animate({
      opacity: 1
    }, 1000);
  });
});

<script src="https://sites.google.com/a/nure.ua/gleb-glugovskiy-kn-15-6/images/jquery.hotkeys.js"></script>

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {

    $('#page').addClass('snap-menu');

  }
  if ($(document).scrollTop() < 50) {
    $('#page').removeClass('snap-menu');

  }
});

$(document).ready(function() {
  $("html").animate({
    opacity: 1
  }, 1000);
  $(".item img").animate({
    opacity: 0
  }, 'fast');

  $(".item img").animate({
    opacity: 1
  }, 2000);

});

$(function() {

  $('img').click(function() {
    $('#imgBig').attr('src', $(this).attr('src'))
    $("#overlay").show();
    $("#overlayContent").show();
  });
  $("#close").click(function() {
    $("#imgBig").attr("src", "");
    $("#overlay").hide();
    $("#overlayContent").hide();
  });

  $(document).bind('keyup', '1', function() {
    $(".item1").click()
  });
  $(document).bind('keyup', '2', function() {
    $(".item2").click()
  });
  $(document).bind('keyup', '3', function() {
    $(".item3").click()
  });
  $(document).bind('keyup', 'right', function() {
    $(".right").click()
  });
  $(document).bind('keyup', 'left', function() {
    $(".left").click()
  });

  $("nav li a").click(function() {
    var s = $("h3").siblings();
    s.hide();
    var m = $(this).attr("href");
    var g = $(m).children();
    g.show();
  });



});
function validateEmail(email) {
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
 }
 function validateNumber(number) {
   var re = /^\d{9}$/
   return re.test(number);
 }
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["number"].value;
    if (!validateEmail(x)) {
        alert("Введите правильный Email");
        return false;
    }
    else if (!validateNumber) {
      alert("Введите правильный номер телефона(9 цифр, без +)");
      return false;
    }
}
$(function() {
  var s = $("h3").siblings();
  s.hide();
  $("h3").click(function() {
    var p = $(this).siblings();
    p.toggle();
  });

  $('#showAll').click(function() {
    var s = $("h3").siblings();
    s.toggle();
  });


  $(document).bind('keyup', '1', function() {
    window.location.hash = "#Potf-main";
  });
  $(document).bind('keyup', '2', function() {
    window.location.hash = "#fav-subj";
  });
  $(document).bind('keyup', '3', function() {
    window.location.hash = "#comp-access";
  });
  $(document).bind('keyup', '4', function() {
    window.location.hash = "#prog-languages";
  });
  $(document).bind('keyup', '5', function() {
    window.location.hash = "#ai";
  });
  $(document).bind('keyup', '6', function() {
    window.location.hash = "#hobbies";
  });
  $(document).bind('keyup', '7', function() {
    window.location.hash = "#planes";
  });


  $("nav li a").click(function() {
    var s = $("h3").siblings();
    s.hide();
    var m = $(this).attr("href");
    var g = $(m).children();
    g.show();
  });


  $("tbody tr").hover(
    function() {
      $(this).css("background", "lightgreen");
    },
    function() {
      $(this).css("background", "");
    });
});
