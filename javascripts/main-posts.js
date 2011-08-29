var API_KEY = 'ABQIAAAAioVG4cScdJ2Csnny8hxlzRQ0k7LmwNWN1KPzdPryee6GpBC_0hRQjOPG8jfV_sgUu5ehe3wi4vZkdA';
$(document).ready(function () {
  $('#blog').rssfeed('http://www.scholarslab.org/category/praxis-program/feed/', {
    limit: 10,
    titletag: 'h1',
    snipett: true,
    date: false,
    header: false,
    key: API_KEY,
  });
});

