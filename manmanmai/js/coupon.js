$(function(){
    $.ajax({
        type:'get',
        url:getData('api/getcoupon'),
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('coupon_tpl',info);
            $('.mm_coupon').html(htmlStr);
        }
    })
})