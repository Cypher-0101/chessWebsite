/*navigation bar sticky top*/
window.onscroll = function() {myFunction()};
        
var navbar = document.getElementById("stickynavbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/*Scroll to top when arrow up clicked*/
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 20) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });