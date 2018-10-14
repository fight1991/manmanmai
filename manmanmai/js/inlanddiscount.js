$(function(){
    //发送ajax动态渲染国内折扣区域
    //模拟请求延时效果
    setTimeout(function(){
        $('.discount_info').html('<div class="loading"></div>');
        $.ajax({
            type: 'get',
            url: getData('api/getinlanddiscount'),
            dataType: 'json',
            success: function (info) {
                console.log(info);
                //绑定模板引擎
                var htmlStr = template('discount_tpl', info);
                $('.discount_info').html(htmlStr);
            }
        })
    },5000)
})