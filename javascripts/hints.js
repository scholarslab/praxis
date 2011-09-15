$(document).ready(function(){
  $('div.highlight').hide();

  $('hr').before($('<a class="hint">Hint</a>'));

  $('.hint').click(function() {
    $(this).prev('.highlight').slideToggle('slow');
  });
});
