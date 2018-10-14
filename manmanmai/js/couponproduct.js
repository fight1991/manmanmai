$(function(){
    var count = 0; //存储图片的张数
    var index = 0;//记录图片的位置
    //1.渲染页面
    $.ajax({
        type:'get',
        url:getData('api/getcouponproduct'),
        data:{couponid:getValue('couponid')},
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr1 = template('product_tpl',info);
            var htmlStr2 = template('modal_tpl',info)
            $('.content').html(htmlStr1);
            $('.modal ul').html(htmlStr2);
            count = info.result.length;
        }
    })

    //2.给每个mm_coupon .content .img 注册点击事件,模态框显示
    
    $('.mm_coupon').on('click','.content .img',function(){
        // alert('noha')
        $('.modal').show();
        //获取当前图片的位置
        index = $(this).data('index');
        console.log(index);
        //并在模态框中显示
        $('.modal li').eq(index).show().siblings().hide()
    })
    //3.点击模态框的区域.模态框隐藏
    $('.modal').click(function(){
        $('.modal').hide();
    })
    //4.给模态框中的left 和 right 按钮注册点击事件
    
    $('.modal .left').click(function(e){
        //阻止事假冒泡
        e.stopPropagation();
        index -- ;
        if(index < 0 ){
            //切换到最后一张
            index = count-1;
        }
        $('.modal li').eq(index).show().siblings().hide()
    })

    $('.modal .right').click(function(e){
        e.stopPropagation();
        index ++;
        if(index > count-1){
            //切换到第一张
            index = 0;
        }
        $('.modal li').eq(index).show().siblings().hide()
    })
})