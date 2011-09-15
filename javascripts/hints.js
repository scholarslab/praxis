$(document).ready(function(){
  $('div.highlight')
    .hide()
    .before($('<a class="hint">Hint</a>'));

  $('.hint').click(function() {
    $(this).next('.highlight').slideToggle('slow');
  });
});
