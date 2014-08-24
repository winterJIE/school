$(function () {
    function tab_switch(index, selector) {
        menu_list.eq(index).click(function () {
            selector.show(300).siblings().hide(300);
            menu_list.eq(index).css('color','#e30113').siblings().css('color','#4c4c4c');
        })
    }

    var menu_list = $('.back_end_menu>li');

    tab_switch(0,$('.back_end_index'));
    tab_switch(1,$('.about_us'));
    tab_switch(3,$('.yipin_course'));
    tab_switch(5,$('.back_yipin_info'));
    tab_switch(6,$('.managing_member'));

    $('.back_menu_secondary').eq(2).click(function () {
        $('.outstanding').show(300);
    })

});
