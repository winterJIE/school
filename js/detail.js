//主页  “专业教育栏滑动”

$(function () {
    var list = $('.subj_list');
    var list_child = $('.subj_list li');
    var box_width = $('.index_subj_box').width();
    var li_width = list_child.eq(0).width();
    var show_num = Math.ceil(box_width / li_width);
    var move_length = list_child.length * li_width - box_width;
    list_child.eq(show_num - 1).mouseenter(function () {
        list.animate({right: move_length}, 300)
    });
    list_child.eq(0).mouseenter(function () {
        list.animate({right: 0}, 300)
    });
});

$(function(){
    var weibo=$('.index_weibo');
    weibo.mouseenter(function(){
        $('.index_weibo_focus').fadeIn(300);
    });
    weibo.mouseleave(function(){
        $('.index_weibo_focus').fadeOut(300);
    })
})

/** 回到顶端 */

$(function () {
    $('.tool_top').click(function () {
        $("body,html").animate({scrollTop: 0}, 400)
    })
});

/** 侧边栏的hover效果 **/
$(function(){
    var tool_bar_add=$('.tool_bar_add a');
    tool_bar_add.mouseenter(function(){
        console.log(123);
        $('.tool_add_hover').animate({width:'100px'},300);
    });
    tool_bar_add.on('mouseleave',function(){
        $('.tool_add_hover').animate({width:0},300);
    })
});


$(function () {
    /** color lump scrolling effect */
    $('.lump_green_scroll').click(function () {
        $("body").animate({scrollTop:'830px'}, 500);
    });
    $('.lump_blue_scroll').click(function () {
        $("body").animate({scrollTop:'1650px'}, 500);
    });

    /**  "关于我们"页面 弹出框效果  */
    $('.join_button_1').click(function () {
        $('.about_popup').fadeIn(300);
        $('body').css('overflow-y', 'hidden');
    });
    $('.popup_close').click(function () {
        $('.about_popup').fadeOut(300);
        $('body').css('overflow-y', 'auto');
    });

    /** attributes of popup window */
    var pop_form = $('.pop_form');
    var form_height = window.innerHeight - 40;
    var content_height = form_height - $('.popup_header').height();
    var form_margin = (window.innerWidth - pop_form.width()) / 2;
    pop_form.css({
        'height': form_height + 'px',
        'marginLeft': form_margin + 'px',
        'marginRight': form_margin + 'px'
    });
    $('.popup_box').css('height', content_height + 'px');


});


/** sliding picture in the index **/
$(function(){
    $('.index_slide .carousel-inner img').css({'width':$('body').width(),'margin':0})
});
