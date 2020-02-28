$(function(){

    var firstmenu = $('nav div > ul > li ');
    var nav = $('.contain');

    firstmenu.mouseenter(function(){
        nav.animate({height:'250px'},300);
    }).mouseleave(function(){
        nav.animate({height:'50px'},300);
    });

});