$(document).ready(function(){
    var bannerBar = 0;
    
    bannerSlid=setInterval(function(){
        bannerBar++;
        
        if(bannerBar>3){
            bannerBar=0;
        }
        
        setTimeout(function(){
            $(".bannerBar").eq(bannerBar).trigger("click");
        });
        
        $(".bannerBar").removeClass("barOn");
        $(".bannerBar").eq(bannerBar).addClass("barOn");
    },5000);
    
    $(".bannerBar").each(function(index){
        $(this).attr("bannerBarNum",index);
    }).hover(function(){
        clearInterval(bannerSlid);
    },function(){
        bannerSlid;
    }).click(function(){
        var bannerBarNum = $(this).attr("bannerBarNum");
        
        switch(bannerBarNum){
            case "0": 
                $(".bannerMask").css({
                    transform:"translate(0vw)",
                });
                break;
            case "1":
                $(".bannerMask").css({
                    transform:"translate(-100vw)",
                });
            break;
            case "2":
                $(".bannerMask").css({
                    transform:"translate(-200vw)",
                });
            break;
            case "3":
                $(".bannerMask").css({
                    transform:"translate(-300vw)",
                });
            break;
        }
        
        $(".bannerBar").removeClass("barOn");
        $(".bannerBar").eq(bannerBarNum).addClass("barOn");
    });
    
    
});