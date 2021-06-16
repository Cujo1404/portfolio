//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("emailbtmDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.emailbtm')) {
    var emailbtmDropdown = document.getElementById("emailbtmDropdown");
      if (emailbtmDropdown.classList.contains('show')) {
        emailbtmDropdown.classList.remove('show');
      }
    }
  }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("phonebtmDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.phonebtm')) {
    var phonebtmDropdown = document.getElementById("phonebtmDropdown");
      if (phonebtmDropdown.classList.contains('show')) {
        phonebtmDropdown.classList.remove('show');
      }
    }
  }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("locationbtmDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.locationbtm')) {
    var locationbtmDropdown = document.getElementById("locationbtmDropdown");
      if (locationbtmDropdown.classList.contains('show')) {
        locationbtmDropdown.classList.remove('show');
      }
    }
  }