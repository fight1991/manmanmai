$(function(){
    var titleid = getValue('titleid') || 0; //存取当前页面的titleid
    //1.动态渲染bcj导航列表
    $.ajax({
        type: 'get',
        url: getData('api/getbaicaijiatitle'),
        dataType: 'json',
        success: function (info) {
            //存储titleid
            info.titleid = titleid;
            console.log(info);
            var htmlStr = template('nav_tpl', info);
            $('.bcj_nav').html(htmlStr);
            
            //动态计算导航列表的宽度
            renderNav();
            var myScroll = new IScroll('.bcj_nav', {
                scrollX: true
            });
        }
    })
    //2.动态渲染bcj内容区域 
    render();
    //3.给导航注册点击事件,获取相应的页面
    $('.bcj_nav').on('click','.nav li',function(){
        //3.1获取titleid
        titleid =  $(this).data('titleid');       
        //3.2当前选中的添加current类
        $(this).addClass('current').siblings().removeClass('current');
        var x = $(this).width()
        location.href = 'baicaijia.html?titleid=' + titleid;
        
    })


    //4.监听页面缩放事件,动态渲染导航列表
    window.addEventListener('resize',function(){
        renderNav();
    })

    //5.初始化scroll插件
    // window.addEventListener("load", function () {
    //     // 实现区域滚动
       
    // });





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
                $('.bcj-list').html(htmlStr);
                
    
            }
        })
    }

    //封装导航列表的函数
    function renderNav(){
        //由于每个li的宽度不一样,所有遍历获取li元素的宽度
        var $lis = $('.bcj_nav li');
        var width = 0;
        $lis.each(function (i, v) {
            width += $(v).width()
        })
        //设置给ul;
        $('.bcj_nav .nav').width(width+1);
    }
})


