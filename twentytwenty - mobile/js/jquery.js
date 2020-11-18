$(document).ready(function(){
    var body_offset = $("body").offset();
	
    $(window).scroll(function() {
		if($(document).scrollTop() > body_offset.top){
            $(".white").addClass("off");
            $("header").addClass("bg--white");
            $(".black").addClass("on");
		}
    });

    // $("img").appendTo(".img_box");
    // setInterval(function(){
    //     $("img:first").appendTo(".img_box");
    // },800);

    $(".slide--btn").each(function(index){$(this).attr("slide-btn",index);}).click(function(){
        var slide_btn_num = $(this).attr("slide-btn");
        btn_num = "slide_btn_num * -100";

        $(".slide--btn").removeClass("slide--btn--on");
        $(".slide--btn").eq(slide_btn_num).addClass("slide--btn--on");
        
         switch(slide_btn_num){
            case "0": 
                $(".slid__mask").css({
                    transform:"translate(0)",
                });
                break;
            case "1":
                $(".slid__mask").css({
                    transform:"translate(-375px)",
                });
            break;
            case "2":
                $(".slid__mask").css({
                    transform:"translate(-750px)",
                });
            break;
        }
    });
    

});