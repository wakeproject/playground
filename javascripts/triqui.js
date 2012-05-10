$(document).ready(function(){
    $("#thumbnails ul li").each(function(index){
        $(this).find(".description").html("<h2>"+$(this).find("img").attr("alt")+"</h2>"+$(this).find(".description").html());
    });
    $("#caption").html($("#thumbnails ul li:first").find(".description").html());
    $("#caption").animate({opacity:0.85},10)
    $("#mainimage").css("background-image","url("+$("#thumbnails ul li:first").find("a").attr("href")+")");
    $("#thumbnails ul li:first").addClass("current");
    $("#thumbnails ul li").click(function(){
        var index = $(this).index();
        if (!$(this).is(".current")){
            $("#caption").animate({opacity:0,marginBottom:-$("#caption").height()},function(){
                $("#caption").html($("#thumbnails ul li:eq("+index+")").find(".description").html());
                $("#caption").animate({opacity:0.85,marginBottom:0});
                $("#mainimage").css("background-image","url("+$("#thumbnails ul li:eq("+index+")").find("a").attr("href")+")");
            });
        }
        $("#thumbnails ul li").removeClass("current");
        $(this).addClass("current");
        return false;
    })
    $("#thumbnails ul li").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});
});

