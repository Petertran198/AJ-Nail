// Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

// Configure Slider
    $('.carousel').carousel({
      interval: 4500,
      pause: 'hover'
    });

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
// grid
   baguetteBox.run('.grid-gallery', { animation: 'slideIn'});
