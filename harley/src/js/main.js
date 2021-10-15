$(document).ready(function(){
    //main_menu
    $(".main_menu").each(function(index){$(this).attr("main-menu-index",index);});
    $(".main_menu").hover(function(){
        var menu_num=$(this).attr("main-menu-index");
        /*$(".main_meun").addClass("main_menu_hover");*/
        $(".sub_menu_box").addClass("on");
        $(".sub_menu").eq(menu_num).addClass("on");
    },function(){
        /*$(".main_menu").removeClass("main_menu_hover");*/
        $(".sub_menu_box").removeClass("on");
        $(".sub_menu").removeClass("on");
    });
    
    $(".main_menu").click(function(){
        var menu_num=$(this).attr("main-menu-index");
        
        $(".main_menu").removeClass("main_menu_hover");
        $(".sub_menu_box").removeClass("on");
        $(".sub_menu").removeClass("on");
        
        $(".main_meun").addClass("main_menu_hover");
        $(".sub_menu_box").addClass("on");
        $(".sub_menu").eq(menu_num).addClass("on");
    });
    
    //sub menu
    $(".sub_menu").each(function(index){$(this).attr("sub-menu-index",index);});
    $(".sub_menu").hover(function(){
        var sub_num=$(this).attr("sub-menu-index");
        $(".sub_menu_box").addClass("on");
        $(".sub_menu").eq(sub_num).addClass("on");
    },function(){
        $(".sub_menu_box").removeClass("on");
        $(".sub_menu").removeClass("on");
    });
    
    $(".sub_img_box").each(function(index){$(this).attr("img-index",index);});
    $(".sub_img_box").hover(function(){
        var img_title = $(this).attr("img-index");
        /*$(".sub_img_box").eq(img_title).addClass("sub_img_hover");*/
        $(".sub_line_box").eq(img_title).addClass("f_line_box_on");
        $(".sub_line_box1").eq(img_title).addClass("s_line_box_on");
        $(".sub_img_title").eq(img_title).addClass("on");
    },function(){
        $(".sub_line_box").removeClass("f_line_box_on");
        $(".sub_line_box1").removeClass("s_line_box_on");
        $(".sub_img_box").removeClass("sub_img_hover");
        $(".sub_img_title").removeClass("on");
    });

    $(".sub_contant").each(function(index){$(this).attr("buy-index",index);});
    $(".sub_contant").hover(function(){
        var buy_num=$(this).attr("buy-index");
        $(".sub_contant").eq(buy_num).css({color:"#EE7D00"});
    },function(){
        $(".sub_contant").css({color:"white"});
    });
    
    $(".main_but").each(function(index){$(this).attr("main-but-index",index);});
    $(".main_but").hover(function(){
        var main_but_num=$(this).attr("main-but-index");
        $(".main_but").eq(main_but_num).addClass("main_but_on");
    },function(){
        $(".main_but").removeClass("main_but_on");
    });
    
    //color view
    $(".color_but").each(function(index){$(this).attr("color-index",index);});
    $(".color_but").click(function(){
        var color_num=$(this).attr("color-index");
        $(".color_but").removeClass("img_on");
        $(".color_img").removeClass("on");
        $(".color_name").removeClass("on");
        $(".color_but").eq(color_num).addClass("img_on");
        $(".color_img").eq(color_num).addClass("on");
        $(".color_name").eq(color_num).addClass("on");
    });
    
});