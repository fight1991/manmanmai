$(function(){
    $.ajax({
        type:'get',
        url:getData('api/getcouponproduct'),
        data:{couponid:getValue('couponid')},
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('product_tpl',info);
            $('.content').html(htmlStr);
        }
    })
})