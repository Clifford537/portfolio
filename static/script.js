// Scroll to top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("btnScrollToTop");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
    scrollToTopBtn.style.bottom = "30px";
    scrollToTopBtn.st// Scroll to top button functionality
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
    
    // Add smooth scrolling functionality
    document.getElementById("btnScrollToTop").addEventListener("click", function() {
      scrollToTopSmoothly();
    });
    
    function scrollToTopSmoothly() {
      var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTopSmoothly);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    }
    yle.right = "30px";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

document.getElementById("btnScrollToTop1").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Add class to trigger animations
    document.querySelectorAll(".animated-text").forEach(function(elem) {
        elem.classList.add("animate");
    });

    // Add animation for text below after a delay
    setTimeout(function() {
        document.querySelectorAll(".animated-text-welcome-after").forEach(function(elem) {
            elem.classList.add("animate");
        });
    }, 1000); 
});

const heading = document.getElementById('typing-heading').innerText;
document.getElementById('typing-heading').innerText = '';
let j = 0;
function typeWriterHeading() {
  if (j < heading.length) {
    document.getElementById('typing-heading').innerHTML += heading.charAt(j);
    j++;
    setTimeout(typeWriterHeading, 50);
  }
}
typeWriterHeading();

const text = document.getElementById('typing-text').innerText;
document.getElementById('typing-text').innerText = '';
let i = 0;
function typeWriterText() {
  if (i < text.length) {
    document.getElementById('typing-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriterText, 50);
  }
}
typeWriterText();

