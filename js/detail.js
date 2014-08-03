
/**
 *  导航栏的鼠标移动响应


$(function(){

    var navi_li=$(".navi_ul li");
    navi_li.mouseenter(function(){
        navi_li.css("background-color","#fff");
    });
    navi_li.mouseleave(function(){
        this.css("background-color","#fafafa");
    })
});
 */

/** 回到顶端 */

$(function(){
    var btn=$('.course_detail_tool_bar div').eq(2);
    btn.click(function(){
        $("body,html").animate({scrollTop:0},500)

    })
});
