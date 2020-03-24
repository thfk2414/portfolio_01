$(function(){

   

    // 슬라이더

    var prev = $('.prev');
    var next = $('.next');
    
    var slideIndex = 1;
    showSlides(slideIndex);

    prev.click(function(){
       console.log("이전");
       var order = -1;
       plusSlide(order);

    });
    next.click(function(){
        var order = 1;
        plusSlide(order);
    });

    function plusSlide(n){
        console.log("일단 들어왔음"+n);
        showSlides(slideIndex += n);
    }

    function showSlides(n){
        console.log("슬라이드 쇼"+n);
        var i;
        var slides = document.getElementsByClassName("slide");
        
        if(n > slides.length){slideIndex = 1}
        if(n < 1){slideIndex = slides.length}
        for(i=0; i< slides.length; i++){
            console.log("슬라이드 쇼"+n);
            slides[i].style.display = "none"; 
        }
        slides[slideIndex-1].style.display = "block"; 
    }



    // 각 레이아웃 리모콘
    var content = $('#contents > div');
    var quickmenu = $('.nav_remote div');
    var skill = $("#skill");
    var skillOST = skill.offset().top - 600;

    $(window).scroll(function(){
        content.each(function(index){
            var idx = $(this).index(); console.log("index"+idx);
            if($(this).offset().top <= $(window).scrollTop()+200){
            quickmenu.removeClass('dot');
            quickmenu.eq(idx-1).addClass('dot');
            }
        });

        if($(this).scrollTop() > skillOST){ 
            // 프로그레스 바
            $('.html').animate({width: '90%'},2000);
            $('.css').animate({width: '80%'},2000);
            $('.js').animate({width: '75%'},2000);
            $('.bootstrap').animate({width: '85%'},2000);
               
          
        }




    });
    
});

//전체 화면 조정 
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