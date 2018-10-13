$(function(){
    //1.商品列表渲染

    $.ajax({
        type:'get',
        url: getData('api/getproduct'),
        data:getValue(),//获取地址栏的参数,并以对象的方式返回
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('bijia_tpl',info);
            $('.bijia_content').html(htmlStr);
        }
    })
    //2.获取评论数据 
    $.ajax({
        type:'get',
        url: getData('api/getproductcom'),
        data:getValue(),
        dataType:'json',
        success:function(info){
            // console.log(info);
            var htmlStr = template('comment_tpl',info);
            $('.mm_comment .content').html(htmlStr);
        }
    })
    //3.商品列表导航 
    var categoryid = getValue('categoryid');

    $.ajax({
        type: 'get',
        url: getData('api/getcategorybyid'),
        data: { categoryid: categoryid },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('cateNav_tpl', info);
            $('.mm_cateNav').html(htmlStr);
        }
    })
})