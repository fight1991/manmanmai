//1.点击底部返回顶部按钮返回顶部
$(function(){
    $('.mm_footer .backTop').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    })
})


//2.封装自动拼接绝对地址的ajax请求
function getData(url) {
    var baseUrl = 'http://127.0.0.1:9090/';
    var url = baseUrl + url;
    return url;
}
//3.获取地址栏参数列表

function getValue(k){
    var str = decodeURI(location.search);//?.. 
    //如果?后面没有参数,返回false;
    if (str.length == 0) {
        return false;
    }
    var str1 = str.slice(1);//name=zs&age=19
    var arr = str1.split('&');
    
    var obj = {};
    arr.forEach(function(v,i){
        var key = v.split('=')[0];
        var value = v.split('=')[1];
        obj[key] = value;
    })
    //传参返回字符串,否则返回对象
    return obj[k] || obj ;
}
//4.封装渲染页面结构函数
    function getHtml(){
        var baseUrl = 'http://127.0.0.1:9090/';
        var url = baseUrl + arguments[0];//默认为第一个参数
        var data = {};//默认不传参
        var callback ;//回调函数
        if(arguments.length == 3){
             data = arguments[1];
             callback = arguments[2];
        }else {
             callback = arguments[1];
        }
        $.ajax({
            type: 'get',
            data: data,
            url: url,
            dataType: 'json',
            success: function (info) {
               callback && callback(info)
            }
        })
    }


