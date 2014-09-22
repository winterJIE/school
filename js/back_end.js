$(function () {
    function tab_switch(father, index, selector) {
        father.eq(index).delegate(selector,'click',function () {
            selector.show(300).siblings().hide(300);

            $('.back_end_menu').find('li').removeClass('active');
            if (this.nodeName == 'LI') {
                $(this).addClass('active');
            }

            /**
             * 下面是翻页功能
             * containID是引用jpage的容器,将后面的值改成需要引用翻页功能的大容器的id即可
             * 其余
             */
            selector.find('.jpage_body').attr('id','itemContainer');
            selector.find('.jpage_content').attr('id','content');
            selector.siblings().find('.jpage_body').removeAttr('id');
            selector.siblings().find('.jpage_content').removeAttr('id');

            $("div.holder").jPages({
                containerID: "itemContainer"
            });


        });
    }

<!-- lead the MarkItUp -->
    $('.markitup_module').markItUp(mySettings);


    <!-- adding -->
    function add(tab,popup){
        $('body').delegate(tab+' .back_add_img','click',function(){
            $(popup).removeClass('hide');
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
    $('table').delegate('.back_delete','click',function(){
        $(this).closest('tr').remove();
    });

    /** switch the different tabs **/
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


    var body=$('body');
    $('.icon-remove').on('click', function(e){
        var tar = $(e.currentTarget);
        tar.parents('.yidialog').addClass('hide');
        $('.mask').addClass('hide');
    });

    $('#yipin_sishu_login').on('click', function(){
       $('.yipinsishu_login').removeClass('hide');
       $('.mask').removeClass('hide');
    });

    body.delegate('.message_edit','click', function(){

        $('.yipin_zixun_jiaoxue').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    body.delegate('.teacher_edit','click', function(){

        $('.teach_strength_source').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.member_deit').on('click', function(){

        $('.yipin_chengyuanguanli').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.resource_edit').on('click', function(){

        $('.yipin_resource').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.sishu_info_edit').on('click', function(){

        $('.sishu_info_resource').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });
    body.delegate('.teach_achieve_edit','click', function(){

        $('.teach_achievement_edit').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    body.delegate('.outstanding_edit','click', function(){

        $('.outstanding_source').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.yipin_course_add').on('click', function(){
        $('.yipin_course_source').removeClass('hide').find('.yi_pin_text').text('编辑')
            .closest('.yidialog').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });


    <!-- 'create successfully' -->
    $('.member_save').click(function(){
        $('.yipin_chengyuanguanli').addClass('hide');
        $('.create_success_window').removeClass('hide');
    });

    $('.add_file').closest('div').css('position','relative');


    <!-- index edit -->
    $('.back_edit_first').on('click', function(){

        var tar = $('.yipin_index_first');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.index_add_first').on('click', function(){

        var tar = $('.yipin_index_first');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.back_edit_second').on('click', function(){

        var tar = $('.yipin_index_second');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.index_add_second').on('click', function(){
        var tar = $('.yipin_index_second');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.back_edit_third').on('click', function(){

        var tar = $('.yipin_index_third');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.index_add_third').on('click', function(){
        var tar = $('.yipin_index_third');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.back_edit_fouth').on('click', function(){

        var tar = $('.yipin_index_fouth');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });

    $('.index_add_fouth').on('click', function(){
        var tar = $('.yipin_index_fouth');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide');
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_fouth').on('click', function(){

        var tar = $('.yipin_about_fouth');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        tar.attr('popout_num',$(this).closest('tr').index());
        $('.mask').removeClass('hide');
    });

    $('.about_add_fouth').on('click', function(){
        var tar = $('.yipin_about_fouth');
        tar.find('.yi_pin_text').text('添加');
        tar.removeClass('hide');

        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_third').on('click', function(){

        var tar = $('.yipin_about_third');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        tar.attr('popout_num',$(this).closest('tr').index());
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_second').on('click', function(){

        var tar = $('.yipin_about_second');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        tar.attr('popout_num',$(this).closest('tr').index());
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_first').on('click', function(){

        var tar = $('.yipin_about_first');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        tar.attr('popout_num',$(this).closest('tr').index());
        $('.mask').removeClass('hide');
    });

    $('.about_back_edit_zero').on('click', function(){

        var tar = $('.yipin_about_zero');
        tar.find('.yi_pin_text').text('编辑');
        tar.removeClass('hide').find('button[type=submit]').attr('data_id',$(this).attr('data_id'));
        $('.mask').removeClass('hide');
    });


/** change the class  **/

    $('.yipin_label+div').removeClass('col-sm-10').addClass('col-sm-8');

    /** post data to back end **/
    $('.yidialog button[type=submit]').on('click',function(e){
        var result=$(this).parents('.yipin_form').serializeArray();
        var data_id=$(this).attr('data_id');
        var data={
            res:result,
            id:data_id
        };
        console.log(data);
        e.preventDefault();
        url='';         /** 根据后台的规律拼出来的 **/
        sendData(data,url,$(this));
    });

    function sendData(data,url,buttonClass){
        $.ajax({
            url:'',  /** 这里的url是后台给的 **/        //TODO 后台处理的url写这里
            data:data,
            success:function(result){
                buttonClass.closest('.yidialog').addClass('hide');
                $('.mask').addClass('hide');
            },
            dataType:'json'

        })
    }

    /** 提交表单后数据变化 **/
    function dataChange(tableNum,popoutClass){
        $(popoutClass+' button').on('click',function(){
            $('.about_us .tab_column').eq(tableNum).find('tr').eq($(this).closest('.yidialog').attr('popout_num')).find('td').eq(0)
                .html($(this).closest('form').find('input[type=text]').eq(0).val())
                .siblings('td').eq(0).html($(this).closest('form').find('input[type=text]').eq(1).val());
            $(this).closest('.yidialog').addClass('hide');
            $('.mask').addClass('hide');
        })
    }

    $('.yipin_about_zero button').on('click',function(){
        $('.about_us_table tr').eq(1).find('td').eq(1).html($(this).closest('form').find('input[type=text]').val());
        $(this).closest('.yidialog').addClass('hide');
        $('.mask').addClass('hide');
    });

    dataChange(1,'.yipin_about_first');
    dataChange(2,'.yipin_about_second');
    dataChange(3,'.yipin_about_third');
    dataChange(4,'.yipin_about_fouth');
});
