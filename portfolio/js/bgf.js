$(function(){
          
    var menu = $('#quick_menu ul li');
    var contents = $('#fullpage > div');
    var contents_sub = $('.section_img'); 
    var firstmenu = $('nav > ul > li');
    var submenu = $('nav ul ul');
    var header = $('header');

    contents_sub.addClass('animate_slideInup');   

    firstmenu.mouseover(function(){
        header.animate({height:'300px'},300);
         setTimeout(function(){submenu.show()},300);
    }).mouseleave(function(){
        header.animate({height:'80px'},300);
        submenu.hide();
            
    });
    
    $(window).scroll(function(){
        contents.each(function(index){
        var idx = $(this).index(); console.log("index"+idx);
        if($(this).offset().top <= $(window).scrollTop()+200){
        contents_sub.removeClass('animate_slideInup');
        contents_sub.eq(idx).addClass('animate_slideInup');
        menu.removeClass('on');
        menu.eq(idx).addClass('on'); 
        }
        
        });   
    });
});

window.onload = function () {
    var elm = ".section";
        $(elm).each(function (index) {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function (e) { 
                // firefox에서는 mouseweel이벤트가 적용되지 않음
                // 그래서 DOMMouseScroll를 사용해야한다고 한다. or 휠을 내릴수록 양수
                // 반디로 mousewheel은 휠을 내릴수록 음수가 된다.
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } 
                else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(elmSelecter).next() != undefined) {
                        try{
                            moveTop = $(elmSelecter).next().offset().top;
                        }catch(e){}
                    }
                // 마우스휠을 아래에서 위로
                } else {
                    if ($(elmSelecter).prev() != undefined) {
                        try{
                            moveTop = $(elmSelecter).prev().offset().top;
                        }catch(e){}
                    }
                }
                 
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
                
            });
        });
        
    }