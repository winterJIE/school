$(function () {
    function tab_switch(father,index, selector) {
        father.eq(index).click(function () {
            selector.show(300).siblings().hide(300);

            $('.back_end_menu').find('li').removeClass('active');
            if(this.nodeName == 'LI'){
                $(this).addClass('active');
            }
        });
    }


    var menu_list = $('.back_end_menu>li');
    var secondary_1=$('.back_menu_secondary_1>li');
    var secondary_2=$('.back_menu_secondary_2>li');
    var teach_strength=$('.teach_strength');
    var sishu_info=$('.sishu_info');

    tab_switch(menu_list,0,$('.back_end_index'));
    tab_switch(menu_list,1,$('.about_us'));
    tab_switch(menu_list,3,$('.yipin_course'));
    tab_switch(menu_list,5,$('.back_yipin_info'));
    tab_switch(menu_list,6,$('.managing_member'));

    tab_switch(secondary_1,0,sishu_info);
    tab_switch(secondary_1,1,$('.yipin_messages'));

    tab_switch(secondary_2,0,teach_strength);
    tab_switch(secondary_2,1,$('.teach_achieve'));
    tab_switch(secondary_2,2,$('.outstanding'));

    $('.icon-remove').on('click', function(e){
        var tar = $(e.currentTarget);
        tar.parents('.yidialog').addClass('hide');
        $('.mask').addClass('hide');
    });

    $('#yipin_sishu_login').on('click', function(){
       $('.yipinsishu_login').removeClass('hide');
       $('.mask').removeClass('hide');
    });

    $('.message_edit').on('click', function(){
        $('.yipin_zixun_jiaoxue').removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.teacher_edit').on('click', function(){
        $('.yipin_zixun_jiaoxue').removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.member_deit').on('click', function(){
        $('.yipin_chengyuanguanli').removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.resource_edit').on('click', function(){
        $('.yipin_resource').removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.sishu_info_edit').on('click', function(){
        $('.sishu_info_resource').removeClass('hide');
        $('.mask').removeClass('hide');
    });
    $('.teach_achieve_edit').on('click', function(){
        $('.teach_achievement_edit').removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.outstanding_edit').on('click', function(){
        $('.outstanding_source').removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.yipin_course_add').on('click', function(){
        $('.yipin_course_source').removeClass('hide');
        $('.mask').removeClass('hide');
    });

    <!-- adding -->
    function add(tab,popup){
        $(tab+' .back_add_img').on('click',function(){
            $(popup).removeClass('hide');
            $('.mask').removeClass('hide');
            $(popup+' .yi_pin_text ').html('添加');
        })
    }


    add('.managing_member','.yipin_chengyuanguanli');
    add('.back_yipin_info','.yipin_resource');
    add('.teach_strength','.yipin_zixun_jiaoxue');
    add('.teach_achieve','.teach_achievement_edit');
    add('.outstanding','.outstanding_source');
    add('.yipin_course','.yipin_course_source');
    add('.sishu_info','.sishu_info_resource');
    add('.yipin_messages','.yipin_zixun_jiaoxue');

    <!-- delete -->
    $('.back_delete').on('click',function(){
        $(this).closest('tr').remove();
    });

    $('.add_file').closest('div').css('position','relative');
});
