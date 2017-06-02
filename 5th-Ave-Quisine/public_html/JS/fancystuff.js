
$(window).scroll(function(){
    //by offsetting the content by the same value as scrollTop we can
    //create the illusion that the text is scrolling with its container

    $('.parallax div').each(function(){
        $(this).css('margin-top', $(window).scrollTop() - $(this).parent().position().top);
    });

    $('.circle a').click(function(){
        var $href = $(this).attr('href');
        $('body').stop().animate({
            scrollTop: $($href).offset().top
        },500);
        return false;
    });
    
});

