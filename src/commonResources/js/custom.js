import $ from "jquery";
var footerh3 = $(".footer-links-wrapper h3");

$(document).ready(function () {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper h3").on("click", function () {
      $(this).next("ul").slideToggle(400);
      $(this).toggleClass("expanded");
    });
  } else {
    $(".footer-links-wrapper h3").off("click");
    $(".footer-links-wrapper ul").show();
  }
});
