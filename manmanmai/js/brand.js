$(function () {

    //1.品牌排行列表

    getHtml('api/getbrand',getValue(),function(info){
        console.log(info);
        //绑定模板引擎渲染数据
        var htmlStr = template('brand_tpl', info);
        $('.mm_brandlist .brand ul').html(htmlStr);
    })
    //2.销量排行
    getHtml('api/getbrandproductlist', getValue(), function (info) {
        console.log(info);
        console.log(info);
        //绑定模板引擎渲染数据
        var productlist = info.result[0];
        var htmlStr = template('sellNum_tpl', info);
        $('.mm_brandlist .sellNum ul').html(htmlStr);
        //3.最新评论
        $.ajax({
            type: 'get',
            url: getData('api/getproductcom'),
            data: { productid: productlist.productId },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                info.productlist = productlist;
                //绑定模板引擎渲染数据
                var htmlStr = template('comment_tpl', info);
                $('.mm_brandlist .comment ul').html(htmlStr);
            }
        })
    })
    

})