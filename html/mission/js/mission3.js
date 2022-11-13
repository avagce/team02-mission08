$(document).ready(function(){
    // $(".FAQ_list p").delay(100).animate({opacity: 0.8, top: 10}, 800, "swing")
    $("#FAQ1").click(function(){
        $("#FAQ1 .box").toggle("fast", "swing")
    })
    $("#FAQ2").click(function(){
        $("#FAQ2 .box").toggle("fast", "swing")
    })
    $("#FAQ3").click(function(){
        $("#FAQ3 .box").toggle("fast", "swing")
    })
    $("#FAQ4").click(function(){
        $("#FAQ4 .box").toggle("fast", "swing")
    })
    $("#FAQ5").click(function(){
        $("#FAQ5 .box").toggle("fast", "swing")
    })
    $("#FAQ6").click(function(){
        $("#FAQ6 .box").toggle("fast", "swing")
    })
    $("#FAQ7").click(function(){
        $("#FAQ7 .box").toggle("fast", "swing")
    })
    $("#FAQ8").click(function(){
        $("#FAQ8 .box").toggle("fast", "swing")
    })
    $("#FAQ9").click(function(){
        $("#FAQ9 .box").toggle("fast", "swing")
    })
    $("#FAQ10").click(function(){
        $("#FAQ10 .box").toggle("fast", "swing")
    })
    $("#FAQ11").click(function(){
        $("#FAQ11 .box").toggle("fast", "swing")
    })
    $("#FAQ12").click(function(){
        $("#FAQ12 .box").toggle("fast", "swing")
    })
    $("#FAQ13").click(function(){
        $("#FAQ13 .box").toggle("fast", "swing")
    })
    $("#FAQ14").click(function(){
        $("#FAQ14 .box").toggle("fast", "swing")
    })
    $("#FAQ15").click(function(){
        $("#FAQ15 .box").toggle("fast", "swing")
    })
    $(window).scroll(function(){
        if($(this).scrollTop()> $(".top_menu").height()){
            $("#top img").addClass("on")
        }else{
            $("#top img").removeClass("on")
        }
    })
})
