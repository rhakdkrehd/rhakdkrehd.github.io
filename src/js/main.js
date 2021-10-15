$(document).ready(function(){

    //각자에게
    //$("선택자").each(function(index){});

    var i = 0;

    $(".notice_item").each(function(index){
        $(this).attr("data-index",index);
    }).hover(function(){
        clearInterval(c);
    },function(){
        time();
    });
    
    function color_move(a){
        $(".notice_item").animate({
            top: -30*a
        });
        $(".notice_item:first").appendTo(".notice_list");
    }
    
    function time(){
        c=setInterval(function(){
            i++;
            color_move(i);
        },3000);
    }

    time();

});