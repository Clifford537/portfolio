// Scroll to top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("btnScrollToTop");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
    scrollToTopBtn.style.bottom = "30px";
    scrollToTopBtn.style.right = "30px";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

document.getElementById("btnScrollToTop").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
