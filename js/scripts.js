$(document).ready(function() {
  $("#celebrity").submit(function(event) {
    var inputName = $("input#name").val();
    var inputAge = $("input#favFood").val();


    event.preventDefault();
  });
});
