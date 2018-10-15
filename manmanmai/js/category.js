$(function(){
    //1.渲染商品分类标题
    getHtml('api/getcategorytitle',function(info){
        console.log(info);
        //绑定模板引擎渲染数据
        var htmlStr = template('title_tpl', info);
        $('.mm_category ul').html(htmlStr);
    })
    //2.给每个标题注册点击事件,获取titleid并通过ajax发送给后台
    $('.mm_category').on('click','.category_info',function(){
        //2.1发送ajax渲染数据
        var titleid = $(this).data('titleid');
        $.ajax({
            type:'get',
            url: getData('api/getcategory'),
            data:{titleid:titleid},
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template('item_tpl',info);
                //每个ul的下标和titleid 一一对应;
                $('.category_info .item').eq(titleid).html(htmlStr);
            }
        })
        //2.2 点击当前li 通过切换类来控制子元素ul的显示与隐藏
        $(this).toggleClass('current');
    })

})