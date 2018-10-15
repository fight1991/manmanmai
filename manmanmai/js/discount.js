$(function(){
  
    getHtml('api/getdiscountproduct',getValue(),function(info){
        console.log(info);
        var htmlStr = template('product_tpl', info);
        $('.discount_info').html(htmlStr);
    })
})