$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#vote').show();
  } else {
    $('#under-18').show();
  }

  var over18 = true;
  if (over18) {
    $('vote').show();
  }
});
