$(function(){
    var menu_list=$('.back_end_menu>li');
    menu_list.eq(0).click(function(){
        $('.back_end_tab .back_end_index').show(300).siblings().hide(300);
    });
    menu_list.eq(1).click(function(){
        $('.back_end_tab .about_us').show(300).siblings().hide(300);
    });
    menu_list.eq(3).click(function(){
        $('.back_end_tab .yipin_course').show(300).siblings().hide(300);
    });
    menu_list.eq(5).click(function(){
        $('.back_end_tab .back_yipin_info').show(300).siblings().hide(300);
    });
    menu_list.eq(6).click(function(){
        $('.back_end_tab .managing_member').show(300).siblings().hide(300);
    });

});
