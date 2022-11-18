$(document).ready(function(){
    // $(function($){
    //     var article = $('.FAQ>.FAQ1>.FAQ2>ul>li');
    //     article.find('.box').hide();
    //     $('.FAQ>.article').click(function(){
            
    //         var myArticle = $(this).parents('.article:first');
    //         if(myArticle.hasClass('hide')){
              
    //             article.addClass('hide').removeClass('show');
    //             article.find('.box').slideUp(100);
    //             myArticle.removeClass('hide').addClass('show');
    //             myArticle.find('.box').slideDown(100);
    //         } else{
    //             myArticle.removeClass('show').addClass('hide');
    //             myArticle.find('.box').slideUp(100);
    //         }
    //         // console.log(".box");
    //         return false;
    //     });
    var article = $('.faq>.faqBody>.article');
    article.find('.a').hide();
    $('.faq>.faqBody>.article>.q>a').click(function(){
        var myArticle = $(this).parents('.article:first');
        if(myArticle.hasClass('hide')){
            article.addClass('hide').removeClass('show');
            article.find('.a').slideUp(100);
            myArticle.removeClass('hide').addClass('show');
            myArticle.find('.a').slideDown(100);
        } else{
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(100);
        }
        return false;
    });

   
    $(window).scroll(function(){
        if($(this).scrollTop()> $(".top_menu").height()){
            $("#top img").addClass("on")
        }else{
            $("#top img").removeClass("on")
        }
    })
});    


