$(function(){
    $.ajax({
        type:'get',
        url:getData('api/getdiscountproduct'),
        data:{productid:getValue('productid')},
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('product_tpl',info);
            $('.discount_info').html(htmlStr);
        }
    })
})