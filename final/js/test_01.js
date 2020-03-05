$(function(){

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
});