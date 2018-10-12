//点击底部返回顶部按钮返回顶部
$(function(){
    $('.mm_footer .backTop').click(function(){
        $('html,body').scrollTop(0);
    })
})


//封装自拼接绝对地址的ajax请求
function getData(url) {
    var baseUrl = 'http://127.0.0.1:9090/';
    var url = baseUrl + url;
    return url;
}
//获取地址栏参数列表

function getValue(k){
    var str = location.search;//?..
    var str1 = str.slice(1);//name=zs&age=19
    var arr = str1.split('&');
    var obj = {};
    arr.forEach(function(v,i){
        var key = v.split('=')[0];
        var value = v.split('=')[1];
        obj[key] = value;
    })

    return obj[k];
}