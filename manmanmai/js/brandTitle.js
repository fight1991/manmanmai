$(function () {
    //1.渲染商品分类标题
    $.ajax({
        type: 'get',
        url: getData('api/getbrandtitle'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            //绑定模板引擎渲染数据
            var htmlStr = template('title_tpl', info);
            $('.mm_category ul').html(htmlStr);
        }
    })
 

})