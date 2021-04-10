//smooth scroll
// $(".down").click(function () {
//   $("html, body").animate(
//     {
//       scrollTop: $("#projects").offset().top,
//     },
//     1400
//   );
// });

//hide menu
//$("#menu-overlay").hide()

//x open menu
// $(".menu").click(function () {
//   $("#menu-overlay").fadeToggle();
//   $('.menu').toggleClass("open");
// })

// $(document).ready(function(){

// })

//better
$(".menu").on("click", function () {
  $(this).toggleClass("open");
  if ($(".menu").hasClass("open")) {
    $("#menu-overlay").css("opacity", "1").css("pointer-events", "all");
    $(".logo").css("opacity", "0").css("pointer-events", "none");
  } else {
    $("#menu-overlay").css("opacity", "0").css("pointer-events", "none");
    $(".logo").css("opacity", "1").css("pointer-events", "all");
  }
});
$(window).on("load", function () {
  $(".loader").fadeOut("slow");
});

$("#container").scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".up-arrow-container").css({
      "opacity": "1", 
      "pointer-events": "all"
    });
  } else {
    $(".up-arrow-container").css({
      "opacity": "0", 
      "pointer-events": "none"
    });
  }
});



const modal = document.querySelector(".modal"); 
const previews = document.querySelectorAll("#projects img"); 
const original = document.querySelector(".full-img"); 
const caption = document.querySelector(".caption"); 

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    const originalSrc = preview.getAttribute("data-demon");
    original.src = originalSrc;
    //const altText = preview.alt;
    //caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if(e.target.classList.contains("full-img")){
    modal.classList.remove("open");
    original.classList.remove("open");
  }
}); 