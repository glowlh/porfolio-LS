'use strict';

$(document).ready(function () {
  $(".authorisation-button").on("click", function(event) {
    $("#flipper").addClass("flipped");
    $(".authorisation-button").addClass("hidden");
    event.stopPropagation();
    console.log(1111);// TODO delete
  });
  $(".background-welcome__video").on("click", function(event) {
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






