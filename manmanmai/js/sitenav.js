$(function(){
    //1.渲染导航页面
    $.ajax({
        type:'get',
        url:getData('api/getsitenav'),
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('site_tpl',info);
            $('.mm_sitenav ul').html(htmlStr);
        }
    })
})