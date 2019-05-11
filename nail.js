// Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

// Configure Slider
    $('.carousel').carousel({
      interval: 4500,
      pause: 'hover'
    });

// fade in for carousel 
var fades = document.getElementsByClassName('fade-in');

// Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Video Play
$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});


function fadeIn(){
  for(var i = 0; i< fades.length; i++){
    fades[i].classList.remove("hide");  
    fades[i].classList.add("animated");
    fades[i].classList.add("delay-.5s");    
    fades[i].classList.add("rollIn");
  }
}
setTimeout(fadeIn, 350);

// Icon pop up
var iconFade1 = document.querySelector('.icon-fade-in-1');
var iconFade2 = document.querySelector('.icon-fade-in-2');
var iconFade3 = document.querySelector('.icon-fade-in-3');

function iconFadeIn1(){
    iconFade1.classList.remove("hide");  
    iconFade1.classList.add("show");
}
setTimeout(iconFadeIn1, 1550);


function iconFadeIn2(){
    iconFade2.classList.remove("hide");  
    iconFade2.classList.add("show");
}
setTimeout(iconFadeIn2, 1760);


function iconFadeIn3(){
    iconFade3.classList.remove("hide");  
    iconFade3.classList.add("show");
}
setTimeout(iconFadeIn3, 1960);

//Index customer reward button
var rewardBtn = document.getElementById("rewardBtn");
rewardBtn.addEventListener("click",function(){
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  overlay.style.display = "block";
  popup.style.display = "block";
});

var closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener("click",function(){
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  overlay.style.display = "none";
  popup.style.display = "none";

});    


