$(function(){
    //1.动态渲染bcj导航列表
    $.ajax({
        type:'get',
        url: getData('api/getbaicaijiatitle'),
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('nav_tpl',info);
            $('.bcj_nav').html(htmlStr);
        }
    })
    //2.动态渲染bcj内容区域
    
    var titleid = 0; //存取当前页面的titleid
    render();

    //3.给导航注册点击事件,获取相应的页面
    $('.bcj_nav').on('click','.nav li',function(){
        //3.1获取titleid
        titleid =  $(this).data('titleid');
        render();
        //3.2当前选中的添加current类
        $(this).addClass('current').siblings().removeClass('current');
    })

    //封装根据页面渲染函数
    function render(){
        $.ajax({
            type: 'get',
            url: getData('api/getbaicaijiaproduct'),
            data: { titleid: titleid },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template('content_tpl', info);
                $('.bcj_content').html(htmlStr);
    
            }
        })
    }
})