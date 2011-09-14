$(document).ready(function(){
  $('div.highlight').hide();

  $('hr').before($('<a class="show">Show Hint</a>'));

  $('.show').click(function() {
    $('div.highlight').slideToggle('slow');
  });
});
