$(function(){
    //1.渲染页面
    $.ajax({
        type: 'get',
        url: getData('api/getmoneyctrl'),
        data:getValue(),//获取页面中的pageid并传递给后台
        dataType: 'json',
        success: function (info) {
            //获取当前地址栏中的pageid并保存在info中
            info.pageid = getValue('pageid');
            //计算得到总页数
            var pageCount = Math.floor(info.totalCount / info.pagesize);
            //存储在info对象中
            info.pageCount = pageCount;
            //存储每个页面的pageid,遍历渲染并存储在option中
            info.page = [];
            for(var i = 0;i < pageCount;i ++ ){
                info.page.push({ pageid:i+1,pageCount:info.pageCount});
            }
                console.log(info);              
                var htmlStr = template('comment_tpl', info)
                $('.mm_comment .content').html(htmlStr);
                //给选择按钮注册change事件
                $('#selectPage').change(function () {
                    var pageid = $(this).val();
                //将获取的pageid拼接到参数栏中,并重新渲染页面
                    location.href = 'moneyctrl.html?pageid=' + pageid;
                    
                })

                //给上下也按钮注册点击之间
                $('.prev').click(function(){
                    var pageid = getValue('pageid');
                    pageid --;
                    if(pageid < 1 ){
                        pageid = 1;
                    }
                    location.href = 'moneyctrl.html?pageid=' + pageid;
                })
                $('.next').click(function(){
                    var pageid = getValue('pageid');
                    pageid ++ ;
                    if (pageid > pageCount ){
                        pageid = pageCount;

                    }
                    location.href = 'moneyctrl.html?pageid=' + pageid;
                })
            }
                  
    })
  
})


    //封装页面渲染函数
    function render(url){
        $.ajax({
            type: 'get',
            url: getData(url) || 'api/getmoneyctrl',
            dataType: 'json',
            success: function (info) {
                //得到总页数
                var pageCount = Math.floor(info.totalCount / info.pagesize);
                info.pageCount = pageCount;
                info.page = [];
                for (var i = 0; i < pageCount; i++) {
                    info.page.push({ 'pageid': i + 1, pageCount: info.pageCount });
                }
                var htmlStr = template('comment_tpl', info)
                $('.mm_comment .content').html(htmlStr);
                
            }
        })
    }
