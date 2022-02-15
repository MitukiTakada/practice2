$(function() {
  $('.label').click(function() {
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  });
});