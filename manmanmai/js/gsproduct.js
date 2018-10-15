$(function(){
    //1.渲染店铺等数据
    getHtml('api/getgsshop',function(info){
        console.log(info);
        var htmlStr = template('mall_tpl', info);
        $('.one_nav .mall').html(htmlStr);
    })
    //2.渲染区域数据
    getHtml('api/getgsshoparea', function (info) {
        console.log(info);
        var htmlStr = template('area_tpl', info);
        $('.one_nav .area').html(htmlStr);
    })
    //3.渲染商品列表
    var shopid = 0;
    var areaid = 0;
    render();
    //4.给one_nav 导航注册点击事件获取shopid和areaid
    $('.one_nav').on('click','a',function(){
        // 3.1显示/隐藏下方的列表
        $(this).toggleClass('current');
        $(this).siblings().removeClass('current');
    })
    //5.给one_nav下方的li注册点击事件
    $('.one_nav').on('click','ul li',function(){
        //4.1获取li中的文本
        var value = $(this).text();
        //4.2设置给.title;
        $(this).parent().prev().text(value);
        //4.3获取li元素标签上的属性
        if($(this).data('type') == 'shopid'){
            shopid = $(this).data('shopid');
        }else {
            areaid = $(this).data('areaid');
        }
        
        //4.5重新渲染页面
        render();

    })

    //封装重新渲染当前页面的商品列表函数
    function  render() {
        $.ajax({
            type: 'get',
            url: getData('api/getgsproduct'),
            data: {
                shopid: shopid,
                areaid: areaid 
            },
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                var htmlStr = template('content_tpl', info);
                $('.mm_gsproduct .content').html(htmlStr);
            }
        })
    }
})