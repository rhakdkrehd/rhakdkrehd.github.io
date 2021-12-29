$(document).ready(function(){
    var win_w=$(window).width();
    var win_h=$(window).height();
    
    if(win_w>=1200){
    $(window).scroll(function(){
    var win_sct=$(window).scrollTop();
    if(win_sct>1){
            $("header").addClass("but_on");
        }
        else{
            $("header").removeClass("but_on");
        }
        });
        
        setInterval(function(){$(".baneer_img:first").appendTo(".baneer_mask");},5000);
        
        //history hover
        $(".history_img").each(function(index){$(this).attr("history_hover",index);});
        $(".history_img").hover(function(){
            var i=$(this).attr("history_hover");
            $(".history_img").eq(i).transition({ scale: 1.1 });
        },function(){
            $(".history_img").transition({ scale: 1 });
        });
        
        //event but click
        $(".event_left_but").click(function(){
            $(".event_contant:first").appendTo(".event_contant_box");
        });
        
        $(".event_right_but").click(function(){
            $(".event_contant:last").prependTo(".event_contant_box");
        });
        
        //point but click
        var a=0;
        $(".point_left_but").click(function(){
            a++;
            if(a>=2){a=0;}
            $(".point_img").removeClass("on");
            $(".point_title").removeClass("on");
            $(".point_contant").removeClass("on");
            $(".point_img").eq(a).addClass("on");
            $(".point_title").eq(a).addClass("on");
            $(".point_contant").eq(a).addClass("on");
        });
        
        $(".point_right_but").click(function(){
            a++;
            if(a>=2){a=0;}
            $(".point_img").removeClass("on");
            $(".point_title").removeClass("on");
            $(".point_contant").removeClass("on");
            $(".point_img").eq(a).addClass("on");
            $(".point_title").eq(a).addClass("on");
            $(".point_contant").eq(a).addClass("on");
        });
        
        //star text hover
        $(".star_text a").hover(function(){
            $(".star_text a").addClass("but_on");
        },function(){
            $(".star_text a").removeClass("but_on");
        });
        
        //star but click
        $(".star_but").each(function(index){$(this).attr("but-index",index);});
        $(".star_but").click(function(){
            var j=$(this).attr("but-index");
            $(".star_but").removeClass("but_on");
            $(".star_but").eq(j).addClass("but_on");
            $(".star_text_contant").fadeOut(0);
            $(".star_text_contant").eq(j).fadeIn(500);
        });
    
        var j=0;
        $(".products_left_but").click(function(){
            j--;
            if(j<0){j=4;}
            $(".products_name:first").appendTo(".name_mask");
            $(".products_text_contant").removeClass("on");
            $(".products_text_contant").eq(j).addClass("on");
            $(".products_sub_but").removeClass("but_on");
            $(".products_sub_but").eq(j).addClass("but_on");
            $(".products").eq(0).appendTo(".products_box");
        });
        $(".products_right_but").click(function(){
            j++;
            if(j>=5){j=0;}
            $(".products_name:last").prependTo(".name_mask");
            $(".products_text_contant").removeClass("on");
            $(".products_text_contant").eq(j).addClass("on");
            $(".products_sub_but").removeClass("but_on");
            $(".products_sub_but").eq(j).addClass("but_on");
            $(".products").eq(4).prependTo(".products_box");
        });
    }
    else if(win_w<=1199&&win_w>=760){
        //ham_but click
        var ham_num=0;
        $(".ham_but").click(function(){
            $(".main_menu_box").css({display:"block"});
            $(".bg_color").css({display:"block",opacity:0.6});
            $(".main_menu_box").css({opacity:1});
        });
        
        $(".menu_close").click(function(){
            $(".main_menu_box").css({display:"none"});
            $(".bg_color").css({display:"none",opacity:0});
        });
        
        //baneer fade
        var i=2;
        function baneer_fade(){
            setInterval(function(){
                if(i>=3){i=1;}
                i++;
                $(".baneer_img").fadeOut(2500);
                $(".baneer_img").eq(i).fadeIn(2500);
            },5000);
        }
        baneer_fade();
        
        //star_but click
        $(".star_but").each(function(index){$(this).attr("star-but",index);});
        $(".star_but").click(function(){
            var star_num=$(this).attr("star-but");
            $(".star_but").removeClass("but_on");
            $(".star_text_contant").removeClass("on");
            $(".star_but").eq(star_num).addClass("but_on");
            $(".star_text_contant").eq(star_num).addClass("on");
        });
        
        var j=0;
        $(".products_left_but").click(function(){
            j--;
            if(j<0){j=4;}
            $(".products_name:first").appendTo(".name_mask");
            $(".products_text_contant").removeClass("on");
            $(".products_text_contant").eq(j).addClass("on");
            $(".products_sub_but").removeClass("but_on");
            $(".products_sub_but").eq(j).addClass("but_on");
            $(".products").eq(0).appendTo(".products_box");
        });
        $(".products_right_but").click(function(){
            j++;
            if(j>=5){j=0;}
            $(".products_name:last").prependTo(".name_mask");
            $(".products_text_contant").removeClass("on");
            $(".products_text_contant").eq(j).addClass("on");
            $(".products_sub_but").removeClass("but_on");
            $(".products_sub_but").eq(j).addClass("but_on");
            $(".products").eq(4).prependTo(".products_box");
        });
        
    }
    else{
        $(".ham_but").click(function(){
            $(".menu_box").css({display:"block"});
            $(".bg_color").css({display:"block",opacity:0.6});
        });
        
        $(".menu_but").click(function(){
            $(".menu_box").css({display:"none"});
            $(".bg_color").css({display:"none",opacity:0});
        });
        
        $(".point_but").each(function(index){$(this).attr("point-num",index);});
        $(".point_but").click(function(){
            var point_num=$(this).attr("point-num");
            $(".point_title").removeClass("on");
            $(".point_contant").removeClass("on");
            $(".point_but").removeClass("but_on");
            $(".point_img").removeClass("on");
            $(".point_title").eq(point_num).addClass("on");
            $(".point_contant").eq(point_num).addClass("on");
            $(".point_but").eq(point_num).addClass("but_on");
            $(".point_img").eq(point_num).addClass("on");
        });
    }
    
});