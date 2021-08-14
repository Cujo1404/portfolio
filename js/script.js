//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function myFunction(x) {
  if (x.matches) { // If media query matches
    $(".emailbtm").click(function () {
      $("#emailDropdown").show();

      // $("#locationDropdown").hide();
      // $("#phoneDropdown").hide();

    });

    $(".phonebtm").click(function () {
      $("#phoneDropdown").show();

      // $("#emailDropdown").hide();
      // $("#locationDropdown").hide();

    });

    $(".locationbtm").click(function () {
      $("#locationDropdown").show();

      // $("#emailDropdown").hide();
      // $("#phoneDropdown").hide();

    });
  } else {

  }
}

$(document).ready(function () {
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
});

function goBack() {
  window.history.back();
}

var supports = (function () {
  var d = document.documentElement,
    c = "ontouchstart" in window || navigator.msMaxTouchPoints;
  if (c) {
    d.className += " touch";
    return {
      touch: true
    }
  } else {
    d.className += " no-touch";
    return {
      touch: false
    }
  }
})();

Qualtrics.SurveyEngine.addOnReady(function () {
  $('ScrollButton').hide();
  setTimeout(function () {
    jQuery("#ScrollButton").show();
  }, 10000);
});