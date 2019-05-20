/*
 	购物车功能分析：
 		* 数量变化：加减数量、手动修改数量
 		* 数量变小计跟着变
 		* 删除当行
 		* 全选
 		* 总数量和总价格
        * 全删
    购物车接口：
        * 渲染数据。更新数据。删除商品。
*/



$(function () {
    console.log('New Life!')

    var gid0 = 0;
    var num = 0;

    /*
    	接口部分
    */
    //渲染数据
    function render() {
        console.log('666');
        $.ajax({
            type: 'get',
            url: '../api/cart_getData.php',
            async: true,
            success: function (str) {
                // console.log(str);
                var arr = JSON.parse(str);
                console.log(arr);
                var res = arr.map(function (item) {
                    return `                                        
                    <div class="item-list" gid="${item.gid}">
                    <div class="item-form">
                        <div class="item-single item-item ">
                            <div class="cell p-checkbox">
                                <div class="cart-checkbox-2">
                                    <input type="checkbox" name="checkItem" class="jdcheckbox"> <span class="line-circle"></span>
                                </div>
                            </div>
                            <div class="cell p-goods">
                                <div class="goods-item">
                                    <div class="p-img">
                                        <a href="#">
                                            <img src="../img/${item.smallimg}" alt="" />
                                        </a>
                                    </div>
                                    <!-- xinxi 标题-->
                                    <div class="item-msg">
                                        <div class="p-name"><a href="#" target="_blank"><em class="jdint-icon"></em>
                                                ${item.title}
                                            </a>
                                        </div>
                                        <div class="p-extend">
                                            <span class="promise" _giftcard="giftcard_2563417">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cell p-props p-props-new">
                                <div class="props-txt" title="【金装版】2段（6-12个月）">颜色：【金装版】2段（6-12个月）</div>
                                <div class="props-txt" title="900g">尺码：900g</div>
                            </div>
                            <div class="cell p-price">
                                <strong>${item.price}</strong>
                            </div>
                            <div class="cell p-quantity">
                                <div class="quantity-form">
                                    <a href="javascript:void(0);" class="decrement disabled" id="">-</a>
                                    <input autocomplete="off" type="text" class="itxt" data-num="${item.rest}" value="${item.buy}" id="">
                                    <a href="javascript:void(0);" class="increment" id="">+</a>
                                </div>
                                <div class="ac ftx-03 quantity-txt">有货</div>
                            </div>
                            <div class="cell p-sum">
                                <strong>${item.price * item.buy}</strong>
                            </div>
                            <div class="cell p-ops">
                                <a href="javascript:void(0);" class="cart-remove">
                                    删除
                                </a>
                                <a href="javascript:void(0);" class="cart-follow">移到我的关注</a>
                            </div>
                        </div>
                    </div>
                </div>`;
                }).join('');
                $('#cart_body').append(res);

            }
        });
    };
    render();

    //更新数据，商品数量的更新。（修改商品数量的时候调用：鼠标点击+，鼠标点击-，直接修改商品数量）
    function updateGN() {
        console.log('updateGN');
        $.ajax({
            type: 'get',
            url: '../api/cart_upData.php',
            async: true,
            data: {
                gid: gid0,
                buy: num
            },
            success: function (str) {
                console.log(str);
            }
        });
    }

    //删除数据，
    function deldate() {
        console.log('deldate');
        $.ajax({
            type: 'get',
            url: '../api/cart_delData.php',
            async: true,
            data: {
                gid: gid0
            },
            success: function (str) {
                console.log(str);
            }
        });
    }

    //小计的计算
    function total(now) {
        //找到数量
        var num = $(now).parent().find('.itxt').val();
        console.log(num);
        //找到单价
        var price = $(now).parent().parent().prev().children().eq(0).text();
        //小计=数量*单价
        var xiaoji = (num * price).toFixed(2);
        console.log(num, price, xiaoji);
        $(now).parent().parent().next().children().eq(0).html(xiaoji);;
        all();
        // all2();
        // all3();
    }


    //计算总数量和总价格（底部总结算栏）
    var arr = [];

    function all() {
        arr = []; //存被勾选的复选框的下标
        $('.cart-checkbox-2 input').each(function (i, item) {
            if ($(item).prop('checked')) {
                //被勾选了，把下标存起来
                arr.push(i);
            }
        });
        console.log(arr);

        //总数量
        var numAll = 0;
        //总价格
        var price = 0;
        console.log($('.p-sum').eq(0).children().eq(0).text());
        arr.forEach(function (item) {
            numAll += $('.itxt').eq(item).val() * 1;
            price += $('.p-sum').eq(item).children().eq(0).text() * 1;
        });
        console.log(numAll, price.toFixed(2));

        //渲染到节点
        $('#amount-sum em').html(numAll);
        $('.sumPrice em').html('￥' + price.toFixed(2));
    }

    //1.数量变化：加减数量、手动修改数量
    //点击按钮，数量加一
    $('#cart-list').on('click', '.increment', function () {
        console.log('789');
        num = $(this).prev().val();
        //var kuncun = $(this).prev().attr('data-num');
        var kuncun = $(this).prev().data('num');
        num++;
        if (num >= kuncun) { //设置上限
            num = kuncun;
        }
        $(this).prev().val(num);
        total($(this)); //刷新小计

        gid0 = $(this).parent().parent().parent().parent().parent().attr('gid');
        updateGN();
        // console.log(num);
        console.log(gid0);
    });

    //点击按钮，数量减一
    $('#cart-list').on('click', '.decrement', function () {
        console.log('789');
        num = $(this).next().val();
        num--;
        if (num <= 1) { //设置下限
            num = 1;
        }
        $(this).next().val(num);
        total($(this)); //刷新小计

        gid0 = $(this).parent().parent().parent().parent().parent().attr('gid');
        updateGN();
        // console.log(num);
        // console.log(gid0);
    });

    //手动修改数量
    $('#cart-list').on('input', '.itxt', function () {
        num = $(this).val();
        var kuncun = $(this).data('num');
        if (num <= 1) {
            num = 1;
        } else if (num >= kuncun) {
            num = kuncun;
        }
        $(this).val(num);
        total($(this)); //刷新小计

        gid0 = $(this).parent().parent().parent().parent().parent().attr('gid');
        updateGN();
        // console.log(num);
        // console.log(gid0);
    });

    //删除当行
    $('#cart-list').on('click', '.cart-remove', function () {
        console.log('123');
        var res = confirm('您确认要删除吗？');
        if (res) {
            $(this).parent().parent().parent().parent().remove();
        }

        //获取当前商品的gid，在数据库中删除
        gid0 = $(this).parent().parent().parent().parent().attr('gid');
        deldate();
        console.log(gid0);
    });

    //全选
    $('#allcheck_2 input').click(function () {
        console.log('789');
        var istrue = $('#allcheck_2 input').prop('checked');
        $('.p-checkbox input').prop('checked', istrue);
        $('#allcheck_1 input').prop('checked', istrue);
        $('#allcheck_0 input').prop('checked', istrue);
        all();
    });
    //全选
    $('#allcheck_1 input').click(function () {
        console.log('789');
        var istrue = $('#allcheck_1 input').prop('checked');
        $('.p-checkbox input').prop('checked', istrue);
        $('#allcheck_2 input').prop('checked', istrue);
        $('#allcheck_0 input').prop('checked', istrue);
        all();
    });
    //全选
    $('#allcheck_0 input').click(function () {
        console.log('789');
        var istrue = $('#allcheck_0 input').prop('checked');
        $('.p-checkbox input').prop('checked', istrue);
        $('#allcheck_2 input').prop('checked', istrue);
        $('#allcheck_1 input').prop('checked', istrue);
        all();
    });

    //点击复选框反过来控制全选按钮
    $('#cart-list').on('click', '.p-checkbox input', function () {
        var len = $('.p-checkbox input:checked').size();
        var total = $('.p-checkbox input').size();
        if (len == total) {
            //全都勾选了
            $('#allcheck_2 input').prop('checked', true);
            $('#allcheck_1 input').prop('checked', true);
            $('#allcheck_0 input').prop('checked', true);
            // $('#allchecked input').prop('checked', true);
        } else {
            $('#allcheck_2 input').prop('checked', false);
            $('#allcheck_1 input').prop('checked', false);
            $('#allcheck_0 input').prop('checked', false);
            // $('#allchecked input').prop('checked', false);
        }
        all(); //刷新总数量和总价格
    });

    //全删
    $('.remove-batch').click(function () {
        var res = confirm('您确定要删除全部吗');
        if (res) {
            console.log(arr);
            for (var i = arr.length - 1; i >= 0; i--) { //从数组的尾部开始删除
                //获取当前商品的gid，在数据库中删除
                gid0 = $('.item-list').eq(arr[i]).attr('gid');
                deldate();
                console.log(gid0);

                $('.item-list').eq(arr[i]).remove();
            }
            all(); //刷新总数量和总价格
        }
    });


});