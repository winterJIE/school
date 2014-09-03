$(function(){
    var nameData=[{"name":'李大伟'},{"name":'赵文静'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'李伟'},
        {name:'李大伟'},{name:'赵文静'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'李伟'},{name:'李大伟'},
        {name:'赵文静'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},
        {name:'李伟'},{name:'李大伟'},{name:'赵文静'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'李大伟'},
        {name:'赵文静'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'张文龙'},{name:'李文'},
        {name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},
        {name:'李伟'},{name:'李大伟'},{name:'赵文静'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'李大伟'},
        {name:'赵文静'},{name:'张文龙'},{name:'李文'},{name:'李文荣'},{name:'张文龙'},{name:'李文'}];

    var achieve=[{"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},
        {"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},
        {"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},
        {"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"},
        {"achieve":"热烈祝贺XX同学获取市第一名"},{"achieve":"热烈祝贺XX同学获取市第一名"}];

    var nameTemplate = Handlebars.compile($('#info_template').html());
    $('.complex_messages').html(nameTemplate(nameData));

    var strengthTemplate = Handlebars.compile($('#strength_template').html());
    $('.strengthHandle').html(strengthTemplate(nameData));

    var achieveTemplate=Handlebars.compile($('#achieve_template').html());
    $('.achieveHandle').html(achieveTemplate(achieve));

    var outstandingTemplate=Handlebars.compile($('#outstanding_template').html());
    $('.outstandHandle').html(outstandingTemplate(nameData));
});