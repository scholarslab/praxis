$(document).ready(function(){
  $('div.highlight')
    .hide()
    .before($('<a class="answer">Answer</a>'));

  $('.answer').click(function() {
    $(this).next('.highlight').slideToggle('slow');
  });
});
