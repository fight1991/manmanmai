$(function(){
    //1.加载首页动态渲染导航栏
    getHtml('api/getindexmenu',function(info){
        console.log(info);
        var arr = info.result;
        htmlStr = '<ul class="clearfix">'
        arr.forEach(function (v, i) {
            htmlStr += `<li>
                            <a href="${v.titlehref}">
                                ${v.img}
                                <p>${v.name}</p>
                            </a>
                        </li>`
        })
        htmlStr += '</ul>'
        $('.mm_nav').html(htmlStr);
    })
    //2.点击更多,显示/隐层下一行;
    $('.mm_nav').on('click','li:nth-child(8)',function(){
        // alert('注册成功');
        $('.mm_nav li:nth-child(n+9)').toggleClass('current');
    })
    //3.动态渲染超值折扣区域;
    getHtml('api/getmoneyctrl',function(info){
        console.log(info)
        var htmlStr = template('comment_tpl', info)
        $('.mm_comment .content').html(htmlStr);
    })




 
    
})