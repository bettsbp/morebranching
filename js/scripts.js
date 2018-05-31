$(document).ready(function() {
  $("#sides").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (side1 === side2 && side1 === side3 && side2 === side3) {
      $(".eq").show();
      $(".iso").hide();
      $(".sca").hide();
      $(".non").hide();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $(".eq").hide();
      $(".iso").show();
      $(".sca").hide();
      $(".non").hide();
    } else if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
      $(".eq").hide();
      $(".iso").hide();
      $(".sca").hide();
      $(".non").show();
    } else {
      $(".eq").hide();
      $(".iso").hide();
      $(".sca").show();
      $(".non").hide();
    }
    event.preventDefault();
  });
});
