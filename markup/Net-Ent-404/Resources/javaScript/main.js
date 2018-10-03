$(window).on('load', function(){
    
    $('a').on('click', function (e){
        e.preventDefault();
    })
    
    $(".link span a").hover(function () {
        
        var finalPos = $(this).parent().parent().find('.indic').position().left;
        var indicTl = new TimelineMax();
        indicTl.to(".mov-indic", 2, {
            x: finalPos,
            ease: Elastic.easeOut.config(0.8, 0.9)
        })
        .to(".mov-indic", 0.5, {
            opacity: 1
        },0)
                
    }, function(){
        
        
        
    })
    $(".links").hover(function(){
        
    }, function () {
        TweenMax.to(".mov-indic", 0.5, {
            opacity: 0,
            delay: 1
        })
    })
    $(".load-more .btn").on('click', function(){
        $(this).toggleClass('clicked');
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})