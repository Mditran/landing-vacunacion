$(window).resize(function () {
  if (window.innerWidth > 860) {
    $("#nav").removeClass("vertical");
  }
});

$("#menu").click(function () {
  $("#nav").toggleClass("vertical");
  return false;
});
