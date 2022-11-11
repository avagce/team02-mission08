$(document).ready(function(){
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
        $("#FA10 .box").toggle("fast", "swing")
    })
    $("#FAQ11").click(function(){
        $("#FAQ11 .box").toggle("fast", "swing")
    })
    $("#FAQ12").click(function(){
        $("#FAQ12 .box").toggle("fast", "swing")
    })
    $(window).scroll(function(){
        if($(this).scrollTop()> $(".top_menu").height()){
            $("#top").addClass("on")
        }else{
            $("#top").removeClass("on")
        }
    })
})
