$(function(){
    //1.商品列表渲染
    getHtml('api/getproduct', getValue(),function(info){
        console.log(info);
        var htmlStr = template('bijia_tpl', info);
        $('.bijia_content').html(htmlStr);
    })
    //2.获取评论数据 
    getHtml('api/getproductcom', getValue(),function(info){
        var htmlStr = template('comment_tpl', info);
        $('.mm_comment .content').html(htmlStr);
    })
    //3.商品列表导航 
    var categoryid = getValue('categoryid');
    getHtml('api/getcategorybyid', { categoryid: categoryid },function(info){
        console.log(info);
        var htmlStr = template('cateNav_tpl', info);
        $('.mm_cateNav').html(htmlStr);
    })

})