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

    <!-- adding -->
    function add(tab,popup){
        $(tab+' .back_add_img').on('click',function(){
            $(popup).removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
            $('.mask').removeClass('hide');
            $(popup+' .yi_pin_text ').html('添加');


        })
    }


    add('.managing_member','.yipin_chengyuanguanli');
    add('.back_yipin_info','.yipin_resource');
    add('.teach_strength','.teach_strength_source');
    add('.teach_achieve','.teach_achievement_edit');
    add('.outstanding','.outstanding_source');
    add('.yipin_course','.yipin_course_source');
    add('.sishu_info','.sishu_info_resource');
    add('.yipin_messages','.yipin_zixun_jiaoxue');

    <!-- delete -->
    $('.back_delete').on('click',function(){
        $(this).closest('tr').remove();
    });

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
       $('.yipinsishu_login').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
       $('.mask').removeClass('hide');
    });

    $('.message_edit').on('click', function(){
        $('.yipin_zixun_jiaoxue').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.teacher_edit').on('click', function(){
        $('.teach_strength_source').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.member_deit').on('click', function(){
        $('.yipin_chengyuanguanli').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.resource_edit').on('click', function(){
        $('.yipin_resource').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.sishu_info_edit').on('click', function(){
        $('.sishu_info_resource').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });
    $('.teach_achieve_edit').on('click', function(){
        $('.teach_achievement_edit').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.outstanding_edit').on('click', function(){
        $('.outstanding_source').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.yipin_course_add').on('click', function(){
        $('.yipin_course_source').removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });


    <!-- 'create successfully' -->
    $('.member_save').click(function(){
        $('.yipin_chengyuanguanli').addClass('hide');
        $('.create_success_window').removeClass('hide');
    });

    $('.add_file').closest('div').css('position','relative');


    $('.back_edit_first').on('click', function(){
        var tar = $('.yipin_index_first');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.index_add_first').on('click', function(){
        var tar = $('.yipin_index_first');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.back_edit_second').on('click', function(){
        var tar = $('.yipin_index_second');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.index_add_second').on('click', function(){
        var tar = $('.yipin_index_second');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.back_edit_third').on('click', function(){
        var tar = $('.yipin_index_third');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.index_add_third').on('click', function(){
        var tar = $('.yipin_index_third');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.back_edit_fouth').on('click', function(){
        var tar = $('.yipin_index_fouth');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.index_add_fouth').on('click', function(){
        var tar = $('.yipin_index_fouth');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_fouth').on('click', function(){
        var tar = $('.yipin_about_fouth');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.about_add_fouth').on('click', function(){
        var tar = $('.yipin_about_fouth');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_third').on('click', function(){
        var tar = $('.yipin_about_third');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_second').on('click', function(){
        var tar = $('.yipin_about_second');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_first').on('click', function(){
        var tar = $('.yipin_about_first');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_zero').on('click', function(){
        var tar = $('.yipin_about_zero');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').attr('data_id',Math.floor(Math.random()*1000));
        $('.mask').removeClass('hide');
    });




    $('.yipin_label+div').removeClass('col-sm-10').addClass('col-sm-8');
});
