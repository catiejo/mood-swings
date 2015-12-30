var main = function() {
  $('#awful').mouseenter(function() {
      $('#awful').addClass('purple');
  });
  $('#awful').mouseleave(function() {
      $('#awful').removeClass('purple');
  });
  $('#awful').click(function() {
      $('.log p').prepend("awful.<br>");
  });

  $('#ok').mouseenter(function() {
      $('#ok').addClass('purple');
  });
  $('#ok').mouseleave(function() {
        $('#ok').removeClass('purple');
  });
  $('#ok').click(function() {
      $('.log p').prepend("ok.<br>");
  });


  $('#awesome').mouseenter(function() {
      $('#awesome').addClass('purple');
  });
  $('#awesome').mouseleave(function() {
        $('#awesome').removeClass('purple');
  });
  $('#awesome').click(function() {
      $('.log p').prepend("awesome.<br>");
  });

};

$(document).ready(main);
