$(function () {
    // $.ajax({
    //     type: 'get',
    //     url: getData('api/getmoneyctrlproduct'),
    //     data:getValue(),
    //     dataType: 'json',
    //     success: function (info) {
    //         console.log(info);
    //         var htmlStr = template('product_tpl', info);
    //         $('.mm_discount').html(htmlStr);
    //     }
    // })
    getHtml('api/getmoneyctrlproduct', getValue(),function(info){
        console.log(arguments)
        var htmlStr = template('product_tpl', info);
        $('.mm_discount').html(htmlStr);
    })
})