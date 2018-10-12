$(function(){
    //1.渲染店铺等数据
    $.ajax({
        type:'get',
        url:getData('api/getgsshop'),
        dataType:'json',
        success:function(info){
            console.log(info);

            var htmlStr = template('mall_tpl',info);
            $('.one_nav .mall ul').html(htmlStr);
        }
    })
    //2.渲染区域数据
    $.ajax({
        type:'get',
        url: getData('api/getgsshoparea'),
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('area_tpl', info);
            $('.one_nav .area ul').html(htmlStr);
        }
    })
    //3.渲染商品列表
    var shopid = 0;
    var areaid = 0;
    $.ajax({
        type:'get',
        url:getData('api/getgsproduct'),
        data:{
            shopid:shopid,
            areaid:areaid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('content_tpl',info);
            $('.mm_gsproduct .content').html(htmlStr);
        }
    })
      //3.1给one_nav 导航注册点击事件获取shopid和areaid
    $('.one_nav').on('click','a',function(){
        // alert('你哈');
        $(this).addClass('current').siblings().removeClass('current')
    })
})