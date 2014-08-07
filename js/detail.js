//主页  “专业教育栏滑动”

$(function(){
    var list=$('.subj_list');
    var list_child=$('.subj_list li');
    var box_width=$('.index_subj_box').width();
    var li_width=list_child.eq(0).width();
    var show_num=Math.ceil(box_width/li_width);
    var li_total_length=list_child.length*li_width-box_width;
    var move_length=
    list_child.eq(show_num-1).mouseenter(function(){
        list.animate({right:li_total_length},300)
        });
    list_child.eq(0).mouseenter(function(){
        list.animate({right:0},300)
    });
});

/** 回到顶端 */

$(function(){
    var btn=$('.course_detail_tool_bar div').eq(2);
    btn.click(function(){
        $("body,html").animate({scrollTop:0},500)

    })
});
