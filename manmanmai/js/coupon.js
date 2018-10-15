$(function(){

    
    // $.ajax({
    //     type:'get',
    //     data:{},
    //     url:getData('api/getcoupon'),
    //     dataType:'json',
    //     success:function(info){
    //         console.log(info);
    //         var htmlStr = template('coupon_tpl',info);
    //         $('.mm_coupon').html(htmlStr);
    //     }
    // })

    getHtml('api/getcoupon',function(info){
        // console.log(info);
        var htmlStr = template('coupon_tpl',info);
        $('.mm_coupon').html(htmlStr);
    })

})