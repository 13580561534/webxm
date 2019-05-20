/*
    轮播图写法步骤：
        - 所有的图片放在右侧
        - 开启定时器自动轮播：旧图挪走，新图进入
        - 点击左右按钮可以切换
        - 焦点跟随
        - 点击焦点也可以切换对应的图片
*/

$(function () {

    //1.所有的图片放在右侧
    var iw = $('.imglist li').eq(0).outerWidth();
    $('.imglist li').css('left', iw);
    $('.imglist li').eq(0).css('left', 0);

    //2.开启定时器自动轮播：旧图挪走，新图进入
    var timer = null;
    var now = 0;//可视区图片的下标
    timer = setInterval(next, 2000);//每隔两秒切换一个图片

    function next() {
        //旧图挪走，新图进入
        $('.imglist li').eq(now).animate({ 'left': -iw }, 1000, 'linear');
        now++;
        if (now >= $('.imglist li').size()) {
            now = 0;
        }
        //新图
        $('.imglist li').eq(now).css('left', iw);
        $('.imglist li').eq(now).animate({ 'left': 0 }, 1000, 'linear');
        light();
    }

    function prev() {
        //旧图挪走，新图进入
        $('.imglist li').eq(now).animate({ 'left': iw }, 1000, 'linear');
        now--;
        if (now <= -1) {
            now = $('.imglist li').size() - 1;
        }
        //新图
        $('.imglist li').eq(now).css('left', -iw);
        $('.imglist li').eq(now).animate({ 'left': 0 }, 1000, 'linear');
        light();
    }

    //3.点击左右按钮可以切换

    $('#box').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(next, 2000);//每隔两秒切换一个图片
    });


    $('.prev').click(function () {
        //切到上一张
        prev();
    });


    $('.next').click(function () {
        //切到下一张
        next();
    });

    //4.生成焦点，实现焦点跟随，点击焦点能切换图片
    var html = '';
    $('.imglist li').each(function (i, item) {
        html += '<span>' + (i + 1) + '</span>';
    });
    $('.light').html(html);
    $('.light').children().eq(0).addClass('active');

    //焦点跟随
    function light() {
        $('.light').children().eq(now).addClass('active').siblings().removeClass('active');
    }

    //点击焦点能切换图片
    $('.light').on('click', 'span', function () {
        var index = $(this).index();
        if (index > now) {
            //从右边切入新图
            $('.imglist li').eq(now).animate({ 'left': -iw }, 1000, 'linear');
            $('.imglist li').eq(index).css('left', iw);
            $('.imglist li').eq(index).animate({ 'left': 0 }, 1000, 'linear');
        }

        if (index < now) {
            //从左边切入新图
            $('.imglist li').eq(now).animate({ 'left': iw }, 1000, 'linear');
            $('.imglist li').eq(index).css('left', -iw);
            $('.imglist li').eq(index).animate({ 'left': 0 }, 1000, 'linear');
        }

        now = index;
        light()



    });
});
