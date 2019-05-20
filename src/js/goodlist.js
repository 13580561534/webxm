$(function () {

    console.log(66);
    var ipage = 1;
    var pageNow = 1;
    var pagesMax = 0;
    var num = 8 //每页8条数据
    var type = ''; //price:根据价格排序    shoucang：根据收藏量排序
    var order = ''; //up:升序   down：降序
    function init(ipage) {
        console.log(order, type + 'aa');
        $.ajax({
            type: 'get',
            url: '../api/listdata.php',
            data: {
                page: ipage,
                num: num,
                type: type,
                order: order
            },
            success: function (str) {
                create(str);
            }
        });
    }

    init(1);

    function create(str) {
        var json = JSON.parse(str);
        console.log(json);
        pagesMax = Math.ceil(json.total / json.num);

        $('.fp-text b').html(json.page);
        $('.fp-text i').html(pagesMax);
        console.log(pagesMax);
        var res = json.data.map(function (item) {
            var ImgItems = '';
            var bigitem = item.bigimg;
            var picArr = bigitem.split('&');
            // console.log(picArr);
            picArr.map(function (bigItem) {
                ImgItems += `<img src="../img/${bigItem}" class="" loaded="true" style="opacity: 1;">`;
            });
            return ` <li class="gl-item" data-id="${item.gid}">
                                    <div class="p-tab"></div>
                                    <div class="p-cnt">
                                        <div class="item hascont">
                                            <div class="p-img">
                                                <a href="" target="_blank">
                                                 ` + ImgItems + `
                                                </a>
                                            </div>
                                            <div class="price-icon">
                                                <div class="price"> <span psitemsku="J_3851090"><b>¥</b>${item.price}</span>
                                                    <div class="sam"></div>
                                                </div>
                                            </div>
                                            <div class="p-name">
        <a href="#"> <em>${item.title}<font class="skcolor_ljg">奶粉</font> 1+段(12个月以上) 800g/罐 安心罐</em>
                                                </a>
                                            </div>
                                            <div class="p-buy">
                                                <div class="accsess">
                                                    <a href="#"> <span class="cNum"> 
                                            <b class="comment_num">${item.comment}万+</b>条评价</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="p-shop-name">
                                            <p> <a href="#" class="p-shop-name-text">
                                                    ${item.shopname}
                                                    </a>
                                                    <a href="#" class="p-shop-name-icon shop-icon-new"></a>
                                            </p>
                                            </div>
                                            <div class="p-icons" style="max-width: 200px"> <i class="icons serch_zy" data-tips="京东自营，品质保障"> 自营 </i>
                                                <i class="icons serch_coupon" data-tips="本商品可领用优惠券">券999-100 </i> 
                                            </div>
                                            <div class="other">
                                                <div class="cj-concern"> <i></i>
                                                    <em>关注</em>
                                                </div>
                                                <div class="p-operate">
                                                    <a href="#"> <i></i>
                                                        <em>对比</em>
                                                    </a>
                                                </div>
                                                <div class="addCart">
                                                    <a href="###"> <i></i>
                                                        <em>加入购物车</em>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>`;
        }).join("");
        $('.gl-wrap').html(res);
        //渲染页码
        var html = '';
        for (var i = 0; i < 6; i++) {
            html += '<span>' + (i + 1) + '</span>';
        }
        html = `<a href="javascript:;" id="prePage">上一页</a>` + html;
        html = html + `<a href="javascript:;" id="nextPage">下一页</a>`;
        $('#pages_box').html(html); //插入节点
        // console.log(ipage);
        var index = pageNow - 1;
        console.log(index);
        $('#pages_box span').eq(index).attr('class', 'active'); //页码点亮效果
    }

    //页码部分
    //鼠标点击 数字页码
    $('#pages_box').on('click', 'span', function () {
        console.log($(this).html());
        pageNow = $(this).html();
        init(pageNow);
    });
    // 鼠标点击 上一页 下一页
    $('#pages_box').on('click', 'a', function () {
        console.log($(this).html());
        if ($(this).html() == '上一页') {
            pageNow--;
            if (pageNow <= 1) {
                pageNow = 1;
                init(pageNow);
            } else {
                init(pageNow);
            }
        } else if ($(this).html() == '下一页') {
            pageNow++;
            if (pageNow > pagesMax) {
                pageNow = pagesMax;
            } else {
                init(pageNow);
            }
        }
    });

    // 鼠标点击 上一页 下一页（排行栏右边）
    $('#content').on('click', '.fp-prev', function () {
        pageNow--;
        if (pageNow <= 1) {
            pageNow = 1;
            init(pageNow);
        } else {
            init(pageNow);
        }
    });
    $('#content').on('click', '.fp-next', function () {
        pageNow++;
        if (pageNow > pagesMax) {
            pageNow = pagesMax;
        } else {
            init(pageNow);
        }
    });

    //排序功能   
    var isok = true;
    $('.shop-price').on('click', function () {
        // alert(1);
        type = 'price';
        if (isok) {
            order = 'ASC';
        } else {
            order = 'DESC'
        }
        isok = !isok;
        init(1);
        // console.log(666);
    });
    $('.shop-sales').on('click', function () {
        // alert(1);
        type = 'sales';
        init(1);
        // console.log(666);
    });
    $('.shop-comm').on('click', function () {
        // alert(1);
        type = 'comment';
        init(1);
        // console.log(666);
    });
    $('.curr').on('click', function () {
        // alert(1);
        type = '';
        init(1);
        // console.log(666);
    });
    $('.shop-news').on('click', function () {
        // alert(1);
        type = 'news';
        init(1);
        // console.log(666);
    });

    //2.点击商品数据能跳转到详情页
    $('.gl-wrap').on('click', '.p-img', function (e) {
        var id = $(this).parents('li').attr('data-id');
        window.open('details.html?id=' + id);

    });
    $('#header').load('head.html', function () {});
    $('#footer').load('bottom.html', function () {
        //脚部
    });
    $('.dorpdown .dt').hover(function (e) {
        $('.caidan').css('display', 'block');
        e.stopPropagation();
    });
    $('.dorpdown').mouseleave(function (e) {
        $('.caidan').css('display', 'none');
    });
    $('.item').on('mouseover', function () {
        $(this).find('h3 a').css('color', '#312B30').siblings().css('color', '#fff');
        $(this).addClass('hover').siblings().attr('class', 'item');
        $(this).find('.sub-menu').css('display', 'block');
    })
    $('.item').mouseleave(function () {
        $(this).find('.sub-menu').css('display', 'none');
        $(this).find('h3 a').css('color', '#fff');
    });



    //加入购物车

    //鼠标点击按钮，加入购物车
    //1，获取商品id，查询相关数据
    //2，将商品相关数据和用户id，写入购物车信息表

    $('#good-list').on('click', '.addCart', function () {
        // var id0 = ev.target.parentNode.getAttribute("data-id");
        var id = $(this).parents('li').attr('data-id');
        console.log(id);
        console.log('toCart');
        var p = new Promise(function (sucfn) { //写异步请求的代码
            $.ajax({
                type: "get",
                url: "../api/detail.php",
                async: true,
                data: {
                    gid: id,
                },
                success: function (str) {
                    sucfn(str); //拿到数据就返回到then那里做处理：防止嵌套太多出现回调地狱
                }
            });
        });

        p.then(function (data) { //数据渲染写在then里面

            var arr = JSON.parse(data);
            console.log(arr);
            var smallimg1 = arr[0].smallimg;
            console.log(smallimg1);
            var title1 = arr[0].title;
            console.log(title1);
            var price1 = arr[0].price;
            console.log(price1);
            $.ajax({
                type: 'post',
                url: '../api/cart_addData.php',
                async: true,
                data: {
                    gid: id,
                    smallimg: smallimg1,
                    title: title1,
                    price: price1,
                },
                success: function (str) {
                    alert('加入成功~');
                    console.log(str);
                    return;
                }
            });
        });
    });



});