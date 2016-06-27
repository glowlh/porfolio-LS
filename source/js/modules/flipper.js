$(function () {
 'use strict';
  $(".authorisation-button").on("click", function(event) {
    $("#flipper").addClass("flipped");
    $(".authorisation-button").addClass("hidden");
    event.stopPropagation();
  });
  $("#home").on("click", function(event) {
    $("#flipper").removeClass("flipped");
    $(".authorisation-button").removeClass("hidden");
    event.stopPropagation();
  });
  $(document).on("click", function(event) {
    if ($(event.target).parents("#flipper").length == 0) {
      $("#flipper").removeClass("flipped");
      $(".authorisation-button").removeClass("hidden");
    }
  });
});