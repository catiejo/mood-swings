var main = function() {
  $('#awful').mouseenter(function() {
      $('#awful').fadeTo('fast', 1);
  });
  $('#awful').mouseleave(function() {
      $('#awful').fadeTo('fast', 0.5);
  });
  $('#awful').click(function() {
      $('.log p').prepend("awful.<br>");
  });

  $('#ok').mouseenter(function() {
      $('#ok').fadeTo('fast', 1);
  });
  $('#ok').mouseleave(function() {
        $('#ok').fadeTo('fast', 0.5);
  });
  $('#ok').click(function() {
      $('.log p').prepend("ok.<br>");
  });


  $('#awesome').mouseenter(function() {
      $('#awesome').fadeTo('fast', 1);
  });
  $('#awesome').mouseleave(function() {
        $('#awesome').fadeTo('fast', 0.5);
  });
  $('#awesome').click(function() {
      $('.log p').prepend("awesome.<br>");
  });

};

$(document).ready(main);
