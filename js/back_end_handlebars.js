$(function(){
    var nameData=[{"name":'李大伟','dataId':101},{"name":'赵文静','dataId':102},{name:'张文龙','dataId':103},
        {name:'李文','dataId':104},{name:'李文荣','dataId':105},{name:'李伟','dataId':106},
        {name:'李大伟','dataId':107},{name:'赵文静','dataId':108},{name:'张文龙','dataId':109},
        {name:'李文','dataId':110},{name:'李文荣','dataId':111},{name:'李伟','dataId':112},
        {name:'赵文静','dataId':113},{name:'张文龙','dataId':114},{name:'李文','dataId':115}];

    var achieve=[{"achieve":"热烈祝贺XX同学获取市第一名",'dataId':201},
        {"achieve":"热烈祝贺XX同学获取市第一名",'dataId':202},{"achieve":"热烈祝贺XX同学获取市第一名",'dataId':203},
        {"achieve":"热烈祝贺XX同学获取市第一名",'dataId':204},{"achieve":"热烈祝贺XX同学获取市第一名",'dataId':205},
        {"achieve":"热烈祝贺XX同学获取市第一名",'dataId':206},{"achieve":"热烈祝贺XX同学获取市第一名",'dataId':207},
        {"achieve":"热烈祝贺XX同学获取市第一名",'dataId':208},{"achieve":"热烈祝贺XX同学获取市第一名",'dataId':209},
        {"achieve":"热烈祝贺XX同学获取市第一名",'dataId':210},{"achieve":"热烈祝贺XX同学获取市第一名",'dataId':211},
        {"achieve":"热烈祝贺XX同学获取市第一名",'dataId':212},{"achieve":"热烈祝贺XX同学获取市第一名",'dataId':213},
        {"achieve":"热烈祝贺XX同学获取市第一名",'dataId':214}];

    /**
     *           后台仅需要将数据改成上述的格式即可自动套用模版程伟html元素
    */

    var nameTemplate = Handlebars.compile($('#info_template').html());
    $('.complex_messages').append(nameTemplate(nameData));

    var strengthTemplate = Handlebars.compile($('#strength_template').html());
    $('.strengthHandle').append(strengthTemplate(nameData));

    var achieveTemplate=Handlebars.compile($('#achieve_template').html());
    $('.achieveHandle').append(achieveTemplate(achieve));

    var outstandingTemplate=Handlebars.compile($('#outstanding_template').html());
    $('.outstandHandle').append(outstandingTemplate(nameData));
});