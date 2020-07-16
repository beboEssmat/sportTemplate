/*global $ document */
$(".nav>li").click(function () {
    "use strict";
    $(this).addClass("active").siblings('li').removeClass("active");
    
});
 $(".carousel").carousel({
    interval: 5000 
 });

$(".play ul li").click(function () {
    "use strict";
    $(this).addClass("act").siblings('li').removeClass("act");
    
});

$(document).ready(function () {
    
   $(".play ul li span").click(function () {
       $(".data .detl").text($(this).text());
   });
});

$(document).ready(function () {
    
   $(".play ul li span").click(function () {
       $(".result .info").text($(this).text());
   });
});

$(document).ready(function () {
    
   $(".Tennes").click(function () {
       $(".sport-football").fadeOut(200);
       $(".sport-Tennes").fadeIn(500);
   });
});

$(document).ready(function () {
    
   $(".Football").click(function () {
       $(".sport-Tennes").fadeOut(200);
       $(".sport-football").fadeIn(500);
   });
});

$(".link").click(function(e) {
   $(".popup").fadeIn();  
});

$(".popup .close").click(function() {
   $(".popup").fadeOut(); 
});

$(".popup").click(function() {
   $(this).fadeOut(); 
});

$(".popup .inner").click(function(e) {
   e.stopPropagation();
});
//////////////////////////////////////////////////////////////

var scrollButton = $("#scroll-top") ;
$(window).scroll(function() {
   if($(this).scrollTop() >=700)
       {
           scrollButton.show();
       }
    else {
        scrollButton.hide();
    }
});

scrollButton.click(function() {
   $("html,body").animate({scrollTop:0},600); 
});




 