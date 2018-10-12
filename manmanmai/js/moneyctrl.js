$(function(){
    //1.渲染页面
    $.ajax({
        type: 'get',
        url: getData('api/getmoneyctrl'),
        dataType: 'json',
        success: function (info) {
           
            //得到总页数
            var pageCount = Math.floor(info.totalCount / info.pagesize);
            info.pageCount = pageCount;
            info.page = [];
            for(var i = 0;i < pageCount;i ++ ){
                info.page.push({'pageid':i+1,pageCount:info.pageCount});
            }
            console.log(info);  
            
            
            var htmlStr = template('comment_tpl', info)
            $('.mm_comment .content').html(htmlStr);
        }
    })
    //2.给select注册点击事件
    $('.content').on('change','#selectPage',function(){
        var pageid = $(this).val()
        var url = 'api/getmoneyctrl?pageid=' + pageid
        render(url);
        // window.location.href = "moneyctrl.html?pageid=" + $(this).val();
        // $(this).attr('selected', "selected");
         
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
})