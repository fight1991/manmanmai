$(function(){
    //1.动态渲染导航列表
  var categoryid = getValue('categoryid');

    $.ajax({
        type:'get',
        url:getData('api/getcategorybyid'),
        data: { categoryid: categoryid},
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('cateNav_tpl',info);
            $('.mm_cateNav').html(htmlStr);
        }
    })
    //2.动态渲染商品列表
    $.ajax({
        type:'get',
        url: getData('api/getproductlist'),
        data:getValue(),
        dataType:'json',
        success:function(info){
            //2.1.将当前页记录在info中
            info.pageid = getValue('pageid');
            //2.2因为要渲染页数,故在info上以对象的形式增加pageCount和对应的pageid
            var page = [];
            var pages = Math.ceil(info.totalCount / info.pagesize);
            for(var i = 0 ; i < pages;i ++){
                page.push({pageCount:pages,pageid:i+1});
            }
            info.page = page;
            var htmlStr = template('product_tpl',info);
            $('.mm_list').html(htmlStr);
            //2.3给选择按钮注册点击change事件
    
            $('#selectPage').on('change',function(){
                var id = $(this).val()
                //赋值给地址栏,页面重新渲染;
                location.href =
                    `productlist.html?categoryid=${getValue('categoryid')}&category=${getValue('category')}&pageid=${id}`;
                //切换选中的option
                $(this).attr('selected', true);
            })

            //2.4给按钮注册点击事件
            $('.prev').click(function(){
               var id = getValue('pageid')              
               id -- ;
               if( id <= 0 ) {
                   id = 0;
               }
                location.href =
                    `productlist.html?categoryid=${getValue('categoryid')}&category=${getValue('category')}&pageid=${id}`;
               
            })
            $('.next').click(function(){
                var id = getValue('pageid')  
                id ++;
                if ( id > pages ) {
                    id = pages;
                }
                location.href =
                    `productlist.html?categoryid=${getValue('categoryid')}&category=${getValue('category')}&pageid=${id}`;
            })
           
            

        }
    })
    
})