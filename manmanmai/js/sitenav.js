$(function(){
    //1.渲染导航页面
   
    getHtml('api/getsitenav',function(info){
        console.log(info);
        var htmlStr = template('site_tpl', info);
        $('.mm_sitenav ul').html(htmlStr);
    })
})