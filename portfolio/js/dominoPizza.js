$(document).ready(function () {

    var more = $('.more_wrap');
    var btn = $('.more_wrap span img');
    var search = $('.header_location');

    search.click(function(){
        alert("위치접근을 허용해주세요"); 
    });

    more.click(function(e){
        e.preventDefault();
        var more_wrap = $('.more_container');
        

        more_wrap.slideToggle(200);

        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        btn.toggleClass("active");




    });


    var header = $('header');
    var headerOST = header.offset().top;
    var headerTop = $('.header_top');

    $(window).scroll(function(){

        if($(this).scrollTop() >= headerOST){
            headerTop.hide();
            
        }
        if($(this).scrollTop() <= headerOST){
            headerTop.show();
        }

    });

    $('.myinfo_banner').slick({
    autoplay : true,
    dots: false,
    speed : 300 /* 이미지가 슬라이딩시 걸리는 시간 */,
    infinite: false,
    autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,
    arrows: true,
    slidesToShow: 3.35,
    slidesToScroll: 1,
    fade: false
    });

});