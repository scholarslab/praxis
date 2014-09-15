// Responsive-nav.js
var nav = responsiveNav(
    "header nav",
    {
        label: "☰ Menu"
    }
);

// Headroom.js
//var myElement = document.querySelector("#banner");
//var headroom  = new Headroom(myElement);
//headroom.init();

// Konami
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(e) {
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( konami ) >= 0 ){
        $(document).unbind('keydown',arguments.callee);
        $.getScript('//www.cornify.com/js/cornify.js',function(){
            cornify_add();
            $(document).keydown(cornify_add);
        });
    }
});
