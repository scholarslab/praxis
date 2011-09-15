$(document).ready(function(){
  $('div.highlight').hide();

  $('hr').before($('<a class="show">Hint</a>'));

  $('.show').click(function() {
    $(this).prev('.highlight').slideToggle('slow');
  });
});
