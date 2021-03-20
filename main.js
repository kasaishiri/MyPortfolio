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
  $(".menu").toggleClass("open");
  if ($(".menu").hasClass("open")) {
    $("#menu-overlay").css("opacity", "1").css("pointer-events", "all");
    $(".logo").css("opacity", "0").css("pointer-events", "none");
  } else {
    $("#menu-overlay").css("opacity", "0").css("pointer-events", "none");
    $(".logo").css("opacity", "1").css("pointer-events", "all");
  }
});
//load in fade
function fade() {
  $('.loader').fadeOut("slow");
  }
  setTimeout(fade, 3000);