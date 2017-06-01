$(document).ready(function(){
    //parallax scrolling for the landing and homepage.
    
    $(window).scroll(function(){
        //by offsetting the content by the same value as scrollTop we can
        //create the illusion that the text is scrolling with its container
        $('.parallax div').each(function(){
            $(this).css('margin-top', $(window).scrollTop()-$(this).parent().position().top);
        });
    });
});
