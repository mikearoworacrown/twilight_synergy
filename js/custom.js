/*****Navbar Collapse*******/
let collapseButton = document.getElementById("twilight__navbar-collapse");

function collapse() {
  if (collapseButton.className === "twilight__navbar-collapse") {
    collapseButton.className += " collapse";
  } else {
    collapseButton.className = "twilight__navbar-collapse";
  }
}

//Javascript for image slider manual navigation
var slides = document.querySelectorAll(".twilight__slides");
var btns = document.querySelectorAll(".twilight__carousel-dot");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
let currentSlide = 1;

// Javascript for image slider manuel navigation
var manualNav = function(manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    })
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  })
})


//Javascript for image slider auto navigation
var repeat = function() {
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active')
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;
      if(slides.length == i){
        i =0;
      }
      if(i >= slides.length){
        return;
      }

      repeater();
    }, 120000);
  }
  repeater();
}

repeat();

